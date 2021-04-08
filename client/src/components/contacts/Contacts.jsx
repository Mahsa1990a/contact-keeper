import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // adding animation
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
      <TransitionGroup>

      {filtered !== null  //If something is filtering which means filter is not null, we'll map through it and show Contact item
        ? filtered.map(contact => (
          <CSSTransition
            key={contact._id} //because MongoDB has _id not id
            timeout={500} 
            classNames="item"
          >
            <ContactItem contact={contact} />
          </CSSTransition> 
        ))
        : contacts.map(contact => ( //if there's nothing in the filter we'll show the contacts
          <CSSTransition
            key={contact._id} //because MongoDB has _id not id
            timeout={500} 
            classNames="item"
          >
            <ContactItem contact={contact} />  
          </CSSTransition> 
        ))
      }
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts;
