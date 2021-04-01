// we use this the file we're gonna use Mongoose to connect to out Database

const mongoose = require('mongoose');
const config = require('config'); //we need to access that global variable that we created(default)
const db = config.get('mongoURI');

