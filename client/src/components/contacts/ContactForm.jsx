// This ContactForm is gonna be use to add and update contacts

import React, { useContext, useState, useEffect } from 'react'; //we import useState because since it's a form we do need some component level state for each field
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {

  const contactContext = useContext(ContactContext); //we need a func add contact from it

  const { addContact, current, clearCurrent, updateContact } = contactContext; //current is null by default

  useEffect(() => {
    if (current !== null) { //current is null by default
      setContact(current); // it will fill the form with whatever we want(fill it with current which is an obj)
    } else {
      setContact({ // Clear contact
        name: '',
        email:'',
        phone:'',
        type: 'personal'
      });
    }
  
  }, [contactContext, current]); //We want them to happen when contactContext or current changed

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
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // if it's for addind contact or updating:
    if (current === null) {
      //Once our form submited it's gonna look for addContact func(which we put it in ContactState.jsx)
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({ // Clear contact
      name: '',
      email:'',
      phone:'',
      type: 'personal'
    });
  };

  // For clear button
  const clearAll = () => {
    clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Change title based on adding or deleting: */}
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal{' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> {' '}Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
      </div>
      {/* Clear button: */}
      {current && <div>
        <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
      </div>}
    </form>
  )
}

export default ContactForm;
