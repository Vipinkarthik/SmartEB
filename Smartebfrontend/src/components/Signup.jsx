import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div>
      <h1 className="header-title">SMART EB METER READER</h1>
      <div className="app-container">
        <div className="signup-container">
          <div className="signup-form">
            <div className="signup-label">SIGN UP</div>
            <div className="input-group">
              <label htmlFor="email">EMAIL ID:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-group">
              <button className="signup-button" onClick={() => navigate('/login')}>LOGIN</button>
              <button className="submit-button" onClick={handleSignup}>SIGNUP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
