import React, { useContext } from 'react';
// We need AuthContext to see if we're logged in or not:
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute;
