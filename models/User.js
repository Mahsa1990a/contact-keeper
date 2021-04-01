const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true //we don't want same email
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now //will out current date automatically
  }

});

module.exports =  mongoose.model('user', UserSchema);