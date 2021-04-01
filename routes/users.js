// will have register route

const express = require('express');
const router = express.Router(); // so with this we dont need app.get(...) we do router.get(...) or router.post(...)

// @ route            POST api/users
// @ description      Register a user
// @ access           Public
router.post('/', (req, res) => {  //so here '/' means api/users because we defined it in main server.js
  res.send('Register a User');
}); 

module.exports = router;