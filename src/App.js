import { useState } from 'react';
import LoginForm from './Components/LoginForm';
import './App.css';

function App() {
  const adminUser = {
    email: 'admin@gmail.com',
    password: 'admin',
  };

  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in');
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Don't match");
    }
  };

  const Logout = () => {
    setUser({ email: '', password: '' });
  };

  return (
    <div className='App'>
      {user.email != '' ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;
