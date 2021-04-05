import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';

function Contacts() {

  const contactContext = useContext(ContactContext); // So now we have access to any access associated with contactContext

  return (
    <div>
      
    </div>
  )
}

export default Contacts
