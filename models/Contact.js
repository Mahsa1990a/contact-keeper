const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

  //  We need to create a relationship between contacts and users because each users has their own set of contacts
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true  email doesnt need to be unique, because it's a contact
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now //will out current date automatically
  }

});

module.exports =  mongoose.model('contact', ContactSchema);