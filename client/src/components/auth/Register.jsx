// This is gonna be a form with a few fields so we use useState hook:
import React, { useState } from 'react';

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  //Let's destructure them:
  const { name, email, password, password2 } = user; 

  const onChange = () => {

  }

  return (
    <div className='form-container'>
      <h1>Account <span className="text-primary">Register</span></h1>
      <form>
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
      </form>
    </div>
  )
}

export default Register;