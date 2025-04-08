import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import '../styles/navbar.css';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (name && email && mobile && address && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/users/signup', {
          name,
          email,
          mobile,
          address,
          password,
        });

        if (response.data.success) {
          alert("Signup successful!");
          navigate('/login');
        } else {
          alert(response.data.message || "Signup failed.");
        }
      } catch (error) {
        alert("Signup failed. Try again.");
        console.error(error);
      }
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div>
      <h1 className="header-title">SMART EB METER READER</h1>
      <div className="app-container">
        <div className="login-container">
          <div className="login-form">
            <div className="signup-label">SIGNUP</div>
            <div className="input-group">
              <label htmlFor="name">NAME:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL:</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="mobile">MOBILE:</label>
              <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="address">ADDRESS:</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-group">
              <button className="login-button" onClick={handleSignup}>SIGNUP</button>
              <button className="submit-button" onClick={() => navigate('/login')}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
