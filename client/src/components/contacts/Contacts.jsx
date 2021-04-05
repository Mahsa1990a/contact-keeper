import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

function Contacts() {

  const contactContext = useContext(ContactContext); // So now we have access to any access associated with contactContext

  const { contacts } = contactContext; // pull out hard coded contacts from ContactState.jsx
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  )
}

export default Contacts;
