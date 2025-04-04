import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/quickpage.css';

function QuickPay() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Navigate to login page when logout is clicked
    navigate('/');
  };

  return (
    <div className="quickpay-container">
      <div className="section-header">
      </div>
      <div className="top-nav">
        <div className="quickpay-title">
          <span role="img" aria-label="check">✅</span> Quick Pay
        </div>
        <div className="user-info">
          <span role="img" aria-label="user">👤</span> 
          <button className="logout-button" onClick={handleLogout}>Logout-&gt;</button>
        </div>
      </div>
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
