import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// We need AuthContext to see if we're logged in or not:
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
        <Redirect to='/login'/> 
      ) : (
        <Component {...props} />
      )} 
    />
      
    
  )
}

export default PrivateRoute;
