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
      </form>
    </div>
  )
}

export default Register;
