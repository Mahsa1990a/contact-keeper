// will have register route

const express = require('express');
const router = express.Router(); // so with this we dont need app.get(...) we do router.get(...) or router.post(...)
const { body, validationResult } = require('express-validator'); // add it for validation 

const user = require('../models/User');

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

 (req, res) => {  //so here '/' means api/users because we defined it in main server.js

 
 // Finds the validation errors in this request and wraps them in an object with handy functions
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() }); //will give us an arr of errors
  }
  
  //res.send(req.body); // it will give us the data that's sent to the route(which is email, pass, name) SO destrutcure it into:
  const { name, email, password } = req.body;

  
  
}); 

module.exports = router;