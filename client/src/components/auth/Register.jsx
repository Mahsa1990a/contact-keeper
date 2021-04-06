// This is gonna be a form with a few fields so we use useState hook:
import React, { useState } from 'react';

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  return (
    <div>
      
    </div>
  )
}

export default Register;
