// We'll check to see if a token is passed in, if it is, then we're gonna set it to the main global header 
// If not, we'll delete it from global header

import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;
