// will have register route

const express = require('express');
const router = express.Router(); // so with this we dont need app.get(...) we do router.get(...) or router.post(...)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator'); // add it for validation 

const User = require('../models/User');

// @ route            POST api/users
// @ description      Register a user
// @ access           Public
router.post('/', 

  //                          VALIDATE DATA:
  // name must not be empty
  body('name', 'Please add name').notEmpty(),
  // email must be an email
  body('email', 'Please include an email').isEmail(),
  // password must be at least 5 chars long
  body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),

 async (req, res) => {  //so here '/' means api/users because we defined it in main server.js

 
 // Finds the validation errors in this request and wraps them in an object with handy functions
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() }); //will give us an arr of errors
  }
  
  //res.send(req.body); // it will give us the data that's sent to the route(which is email, pass, name) SO destrutcure it into:
  const { name, email, password } = req.body;

  // Dealing with Database, bcrypt( they return promisses)
  try {
    let user = await User.findOne({ email: email });

    //If user exists:
    if (user) {
      return res.status(400).json({ msg: 'User already exists!' });
    }
    //If user does not exist, create new user:
    user = new User({
      name,
      email,
      password
    });

    // hashing password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    //The object that I wanna send in the token
    const payload = {
      user: {
        id: user.id //with this user id we can access all the contacts that the logged in user has
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
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  
}); 

module.exports = router;