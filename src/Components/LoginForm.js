import React, { useState } from 'react';

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='email'>EMAIL:</label>
      <input
        type='text'
        placeholder='email'
        name='email'
        id='email'
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
        value={details.email}></input>
      <label htmlFor='password'>PASSWORD:</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}></input>
      <input type='submit' value='LOGIN'></input>
    </form>
  );
}

export default LoginForm;
