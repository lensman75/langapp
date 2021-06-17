// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <form>
          <p>
            <label>EMail:</label>
            <input type='email' placeholder='EMAIL'></input>
          </p>
          <p>
            <label>Password:</label>
            <input type='password' placeholder='PASSWORD'></input>
          </p>
          <p>
            <button onClick='loginFunc()'>Login</button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
