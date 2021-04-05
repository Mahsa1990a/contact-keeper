import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        // state.contacts which is the current arr and then filter it => evaluate and will return all contacts that are not the current id
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload //the entire contact object
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
}