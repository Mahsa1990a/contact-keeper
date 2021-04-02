// middleware is a function that has access to the request and response cycle and the req and res object
// Everytime we hit an endpoint we can fire off this middleware and we just wanna check to see if there is a token in the header so:

//we need to bring to verify the token:
const jwt = require('jsonwebtoken');
const config = require('config'); //we need access to the secret

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-ayth-token');

  // Check if not token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // If there is a token, we need to verify it:
  try {
    const decodded = jwt.verify(token, config.get('jwtSecret')); //once it get verified the payload is gonna be put into decoded

    // Now we wanna take the user out 
    req.user = decodded.user;
    next(); //then we call next to move on

  } catch (err) {
    res.status(401).send('Token is not valid');
  }

}