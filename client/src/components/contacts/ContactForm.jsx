// This ContactForm is gonna be use to add and update contacts

import React, { useState } from 'react'; //we import useState because since it's a form we do need some component level state for each field

const ContactForm = () => {

  const [contact, setContact ] = useState({
    //defualt of contact(obj):
    name: '',
    email:'',
    phone:'',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'}/> Personal{' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'}/> Professional
    </form>
  )
}

export default ContactForm;
