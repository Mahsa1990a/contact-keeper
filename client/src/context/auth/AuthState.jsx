import React, { useReducer } from 'react'; // useReducer hook for accessing state and dispatch
import axios from 'axios';
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
  const loadUser = async () => {
    // @todo - load token into global headers

    try {
      const res = await axios.get('/api/auth');
      dispatch({ 
        type: USER_LOADED, 
        payload: res.data 
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  // Regisret User:
  const register = async (formData) => { // formData is the Data to register user
    // Since we are doing POST, so sending data, we need that content type header of application json
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data 
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
      
    }
  }

  // Login User:

  // Logout

  // Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    });
  };

  return (

    <AuthContext.Provider
      // Anything we want to access from other component we add here:
      value = {{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
        loadUser
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )

};

export default AuthState;

