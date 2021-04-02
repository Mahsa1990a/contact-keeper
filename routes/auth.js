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
router.post('/', (req, res) => {  
  res.send('Log in user');
});

module.exports = router;