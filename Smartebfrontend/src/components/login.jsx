import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigate('/dashboard');
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div>
      <h1 className="header-title">SMART EB METER READER</h1>
      <div className="app-container">
        <div className="login-container">
          <div className="login-form">
            <div className="signup-label">LOGIN</div>
            <div className="input-group">
              <label htmlFor="username">USERNAME:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-group">
              <button className="submit-button" onClick={() => navigate('/signup')}>SIGNUP</button>
              <button className="login-button" onClick={handleLogin}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
