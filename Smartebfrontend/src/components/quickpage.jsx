import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quickpage.css';
import '../styles/navbar.css';
import manImage from '../assets/man.png';

function QuickPay() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="quickpay-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="home-button">
          <span role="img" aria-label="quick">⚡</span> Quick Pay
        </div>
        <div className="user-info">
          <img src={manImage} alt="User" className="user-icon" />
          Profile
          <button className="logout-button" onClick={handleLogout}>Logout →</button>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="form-area">
        <div className="input-row">
          <label htmlFor="consumerNo">Consumer No :</label>
          <input type="text" id="consumerNo" placeholder="Enter your consumer no" />
          <button className="enter-button">Enter</button>
        </div>
        <div className="input-row">
          <label htmlFor="consumerName">Consumer Name :</label>
          <input type="text" id="consumerName" />
        </div>
        <div className="input-row">
          <label htmlFor="amount">Amount :</label>
          <input type="text" id="amount" />
        </div>
        <div className="input-row">
          <label htmlFor="dueDate">Due Date :</label>
          <input type="text" id="dueDate" placeholder="DD/MM/YYYY" />
        </div>
        <button className="pay-button">Pay Now..</button>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 QuickPay Inc. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
    </div>
  );
}

export default QuickPay;
