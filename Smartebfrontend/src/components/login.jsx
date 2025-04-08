import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import '../styles/navbar.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
  
        if (response.data.success) {
          alert("Login successful!");
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userName', response.data.name); // ✅ Save name
          navigate('/dashboard');
        }
         else {
          alert("Invalid credentials.");
        }
      } catch (error) {
        alert("Login failed. Try again.");
        console.error(error);
      }
    } else {
      alert("Please fill in both fields.");
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
              <label htmlFor="email">EMAIL:</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
