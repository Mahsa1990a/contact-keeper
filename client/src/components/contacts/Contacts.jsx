import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

function Contacts() {

  const contactContext = useContext(ContactContext); // So now we have access to any access associated with contactContext

  const { contacts, filtered } = contactContext; // pull out hard coded contacts from ContactState.jsx

  if (contacts.length === 0) { // If contact is empty
    return <h4>Please Add a Contact</h4>
  } 

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  )
}

export default Contacts;
