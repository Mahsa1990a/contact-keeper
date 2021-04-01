// it has CRUD functionality
// Also each contact specific to user

const express = require('express');
const router = express.Router(); 

// @ route            GET api/contacts
// @ description      Get All user contacts
// @ access           Private
router.get('/', (req, res) => { 
  res.send('Get All contacts');
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