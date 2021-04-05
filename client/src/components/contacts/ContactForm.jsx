// This ContactForm is gonna be use to add and update contacts

import React, { useContext, useState } from 'react'; //we import useState because since it's a form we do need some component level state for each field
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {

  const contactContext = useContext(ContactContext); //we need a func add contact from it

  const [contact, setContact ] = useState({
    //defualt of contact(obj):
    name: '',
    email:'',
    phone:'',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'}/> Personal{' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'}/> Professional
      <div>
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
      </div>
    </form>
  )
}

export default ContactForm;
