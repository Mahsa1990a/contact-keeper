import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import { v4 as uuidv4 } from 'uuid'; // it's only for generate random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

const ContactState = (props) => {
  const initialState = {
    // for now we will have hard cocded contacts
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional'
      }
    ],
    //when we click edit we want to put it into this peace of state and then we can change things on UI based on that
    current: null,
    // For filtering by name or email: by default  is null
    filtered: null // It will be an arr of filtered contacts that match with whatever we put in the input
  };
  // state allow us to use to access anything from state and dispatch allow us dispatch objects to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //All of our actions:

  // Add Contact
  const addContact = (contact) => {
    // v4 is a method
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (

    <ContactContext.Provider
      // Anything we want to access from other component we add here:
      value = {{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      
      { props.children }
    </ContactContext.Provider>
  )

};

export default ContactState;

