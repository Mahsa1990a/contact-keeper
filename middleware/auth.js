// middleware is a function that has access to the request and response cycle and the req and res object
// Everytime we hit an endpoint we can fire off this middleware and we just wanna check to see if there is a token in the header so:

//we need to bring:
const jwt = require('jsonwebtoken');