import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import uuid from 'uuid'; // it's only for generate random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';



