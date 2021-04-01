// Will have login, the authentication, and route to check the logged in userconst express = require('express');

const express = require('express');
const router = express.Router();

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