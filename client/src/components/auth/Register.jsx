// This is gonna be a form with a few fields so we use useState hook:
import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  //Let's destructure them:
  const { name, email, password, password2 } = user; 

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();

    if(name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match!', 'danger')
    } else {
      console.log('Register Submit ...')    
    }
  };

  return (
    <div className='form-container'>
      <h1>Account <span className="text-primary">Register</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} />
        </div>
        <input type="submit" value="Register" className='btn btn-primary btn-block' />
      </form>
    </div>
  )
};

export default Register;
