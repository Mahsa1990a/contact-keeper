import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
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
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi'); // 'gi' means to not be letter sensitive
          return contact.name.match(regex) || contact.email.match(regex); //filter by name or email ... regex(regular expresion which is the text)
        })
      };
    default:
      return state;
  }
}