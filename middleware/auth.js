// middleware is a function that has access to the request and response cycle and the req and res object
// Everytime we hit an endpoint we can fire off this middleware and we just wanna check to see if there is a token in the header so:

//we need to bring to verify the token:
const jwt = require('jsonwebtoken');
const config = require('config'); //we need access to the secret

module.exports = function(req, res, next) {
  
}