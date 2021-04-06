import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
  const initialState = {
    // Vanila javascript to access our browser's local storage
    token: localStorage.getItem('token'),
    isAuthenticated: null, //means it's logged in or not
    loading: true,
    user: null,
    error: null
  };
  // state allow us to use to access anything from state and dispatch allow us dispatch objects to the reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //All of our actions:

  // Load User:

  // Regisret User:

  // Login User:

  // Logout

  // Clear Errors

  return (

    <AuthContext.Provider
      // Anything we want to access from other component we add here:
      value = {{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )

};

export default AuthState;

