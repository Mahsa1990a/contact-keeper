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
router.get('/', auth, async (req, res) => { 
  // res.send('Get All contacts');    Now we need to pull from database:
  try {
    //                             find() means find by anything            -1 means the most recent contact first
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1});
    res.json(contacts); //it returns contacts
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

// @ route            POST api/contacts
// @ description      Add new contacts
// @ access           Private
router.post('/', [ auth,  // The way we can use some middlewares is using []
  body('name', 'Name is reqiured').notEmpty()
], async (req, res) => { 
  // res.send('Add contact');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() }); //will give us an arr of errors
  }

  const { name, email, phone, type } = req.body; //getting name, ... from body

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });
    // We wanna save it to db so we do newContact which is instance of contact and . save which will put in the db 
    const contact = await newContact.save();

    //Finally return contact to the client
    res.json(contact);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

}); 

// @ route            PUT api/contacts/:id
// @ description      Update contacts
// @ access           Private
router.put('/:id', auth, async (req, res) => { 
  // res.send('Update contact');
  const { name, email, phone, type } = req.body;

  // Build contact object
  const contactFields = {};
  if(name) { // if there is a name let's add it to contactFields:
    contactFields.name = name;
  }
  if(email) contactFields.email = email;
  if(phone) contactFields.phone = phone;
  if(type) contactFields.type = type;

  try {
    //                         for accessing '/:id'
    let contact = await Contact.findById(req.params.id);

    if(!contact) return res.status(404).json({ msg: 'Contact not fonud' });

    // We need to make sure user owns the contact:
    if(contact.user.toString() !== req.user.id) { // because req.user.id so we add toString() to the other side to be string as well
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Actual update:
    contact = await Contact.findByIdAndUpdate(req.params.id, 
      { $set: contactFields },
      { new: true } // means if this contact doesn't exist lets create it
    );

    res.json(contact);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

// @ route            DELETE api/contacts/:id
// @ description      Delete contacts
// @ access           Private
router.delete('/:id', auth, async (req, res) => { 
  try {
    //                         for accessing '/:id'
    let contact = await Contact.findById(req.params.id);

    if(!contact) return res.status(404).json({ msg: 'Contact not fonud' });

    // We need to make sure user owns the contact:
    if(contact.user.toString() !== req.user.id) { // because req.user.id so we add toString() to the other side to be string as well
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Actual delete
    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;