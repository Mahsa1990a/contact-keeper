import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import { v4 as uuidv4 } from 'uuid';

import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = (props) => {
  const initialState = [];
  // state allow us to use to access anything from state and dispatch allow us dispatch objects to the reducer
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //All of our actions:

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4(); 
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    // dispear alert after a time
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id })
    }, timeout);
  }

  return (

    <AlertContext.Provider
      // Anything we want to access from other component we add here:
      value = {{
        alerts: state,
        setAlert
      }}
    >
      { props.children }
    </AlertContext.Provider>
  )

};

export default AlertState;

