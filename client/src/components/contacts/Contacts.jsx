import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // adding animation
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

function Contacts() {

  const contactContext = useContext(ContactContext); // So now we have access to any access associated with contactContext

  const { contacts, filtered, getContacts, loading } = contactContext; // pull out hard coded contacts from ContactState.jsx

  // We wanna call getContacts within useEffect when this component loads
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []); //we just run it at the begining so we pass []


  if (contacts !== null && contacts.length === 0 && !loading) { // If contact is empty
    return <h4>Please Add a Contact</h4>
  } 


  return (
    <Fragment>
      {/* if statement: if contacts is not null and it's not loading we wanna show them: */}
      {contacts !== null && !loading ? (
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
      ) : <Spinner /> }
      
    </Fragment>
  )
}

export default Contacts;
