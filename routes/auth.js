// Will have login, the authentication, and route to check the logged in userconst express = require('express');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator'); // add it for validation 

const User = require('../models/User');

// @ route            GET api/auth
// @ description      Get logged in user
// @ access           Private
router.get('/', (req, res) => {  
  res.send('Get logged in User');
}); 

// @ route            POST api/auth
// @ description      Auth user and get token
// @ access           Public
router.post('/',
  //               Validating Email & Pass
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Please is required').exists(),

  async (req, res) => {  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() }); //will give us an arr of errors
  }

  const { email, password } = req.body; //getting email and pass from body

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    //if there is a user -> we want to continue to check the password with bcrypt.compare methode 
    //which it takes plain pass which is comes in from body and hash password(user.password)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) { //if the pass doesn't match
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    // And if pass match we send token:

    //The object that I wanna send in the token
    const payload = {
      user: {
        id: user.id
      }
    }

    // Sign jwt
    jwt.sign(
      payload, 
      config.get('jwtSecret'), 
      {
        expiresIn: 360000,
      }, 
      (err, token) => {
        if(err) throw err;
        res.json({ token }); //if not err
      },
    );

  } catch (err) {
    
  }
});

module.exports = router;