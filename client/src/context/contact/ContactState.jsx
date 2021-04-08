import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'; // it's only for generate random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
  GET_CONTACTS,
  ADD_CONTACT, 
  DELETE_CONTACT, 
  SET_CURRENT, 
  CLEAR_CURRENT, 
  UPDATE_CONTACT, 
  FILTER_CONTACTS, 
  CLEAR_CONTACTS,
  CLEAR_FILTER, 
  CONTACT_ERROR 
} from '../types';

const ContactState = (props) => {
  const initialState = {
    // for now we will have hard cocded contacts // now we clear out hard coded contacts:
    contacts: null,
    //when we click edit we want to put it into this peace of state and then we can change things on UI based on that
    current: null,
    // For filtering by name or email: by default  is null
    filtered: null, // It will be an arr of filtered contacts that match with whatever we put in the input
    error: null
  };
  // state allow us to use to access anything from state and dispatch allow us dispatch objects to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //All of our actions:

  // Get Contacts:     we're gonna hit the backend api/contacts with a Get request:
  const getContacts = async () => {

    try {
      const res = await axios.get('/api/contacts')
      dispatch({ 
        type: GET_CONTACTS, 
        payload: res.data 
      });

    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }

  }; 

  // Add Contact
  const addContact = async (contact) => {
    // v4 is a method
    // contact.id = uuidv4(); //MongoDB will give us id so, we dont need this anymore

    // Create our headers, because we're sending data, we need that content type application json:
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/contacts', contact, config)
      dispatch({ 
        type: ADD_CONTACT, 
        payload: res.data 
      });

    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }

  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`)
      dispatch({ 
        type: DELETE_CONTACT, 
        payload: id 
      });

    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
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
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      
      { props.children }
    </ContactContext.Provider>
  )

};

export default ContactState;

