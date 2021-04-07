// This is gonna be a form with a few fields so we use useState hook:
import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Login = (props) => {

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // if isAuthenticated we wanna redirect to dashboard(Home page):
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger'); //send error with type of danger
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]); // we want it to run when error changed


  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  //Let's destructure them:
  const { email, password} = user; 

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      })
    }
  }

  return (
    <div className='form-container'>
      <h1>Account <span className="text-primary">Login</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <input type="submit" value="Login" className='btn btn-primary btn-block' />
        <Link to='/register'>Or Register</Link>
      </form>
    </div>
  )
};

export default Login;
