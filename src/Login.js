import React, { useState } from 'react';
import './login.css';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please enter both username and password.');
    } else {
      navigate('/tic-tac-toe');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <label>Username:</label><br />
        <input
          type="text"
          className="name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label>Password:</label><br />
        <input
          type="password"
          className="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <p className="para1 y">{error}</p>
        <button type="submit" className='submit'>Submit</button>
        <p className="para u"></p>
      </form>
    </div>
  );
}

export default Login;
