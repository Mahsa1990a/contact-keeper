import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import uuid from 'uuid'; // it's only for generate random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';