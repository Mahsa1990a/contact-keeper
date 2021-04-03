// it has CRUD functionality
// Also each contact specific to user

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator'); // add it for validation 

const User = require('../models/User');
const Contact = require('../models/Contact');

// @ route            GET api/contacts
// @ description      Get All user contacts
// @ access           Private
router.get('/', auth, (req, res) => { 
  // res.send('Get All contacts');    Now we need to pull from database:
  try {
    //                             find() means find by anything            -1 means the most recent contact first
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1});
  } catch (err) {
    
  }
}); 

// @ route            POST api/contacts
// @ description      Add new contacts
// @ access           Private
router.post('/', (req, res) => { 
  res.send('Add contact');
}); 

// @ route            PUT api/contacts/:id
// @ description      Update contacts
// @ access           Private
router.put('/:id', (req, res) => { 
  res.send('Update contact');
}); 

// @ route            DELETE api/contacts/:id
// @ description      Delete contacts
// @ access           Private
router.delete('/:id', (req, res) => { 
  res.send('Delete contact');
});


module.exports = router;