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
    <div>
      
    </div>
  )
}

export default ContactForm;
