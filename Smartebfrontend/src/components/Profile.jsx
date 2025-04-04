import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook
import '../styles/Profile.css';

// Assuming you're fetching user data from an API or context
function Profile() {
  const navigate = useNavigate(); // Initialize the navigate function
  // Placeholder for user data (this could be fetched from an API or context)
  const [userData, setUserData] = useState({
    userName: '',
    address: '',
    email: '',
    phoneNo: '',
  });

  // Simulate fetching user data (for example, from an API)
  useEffect(() => {
    // Simulating a fetch call to get user data
    const fetchedUserData = {
      userName: 'SUDHARSAN PRAKALATHAN', 
      address: 'Kondampatti , Kinathukidavu, Coimbatore',
      email: 'sudharsanprakalathan2023@sece.ac.in',
      phoneNo: '123-456-7890',
    };
    setUserData(fetchedUserData);
  }, []);

  // Handle Logout
  const handleLogout = () => {
    // You can also clear any authentication tokens or user session here if needed
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="profile-container">
      <div className="section-header">
      </div>
      <div className="top-nav">
        <div className="profile-title">
          <span role="img" aria-label="user">👤</span> Profile
        </div>
        <div className="consumer-no">Consumer No: 00000000</div>
        <button className="logout-button" onClick={handleLogout}>Logout →</button>
      </div>
      <div className="form-area">
        <div className="input-row">
          <label htmlFor="userName">User Name:</label>
          <input 
            type="text" 
            id="userName" 
            value={userData.userName} 
            readOnly 
          />
        </div>
        <div className="input-row">
          <label htmlFor="address">Address:</label>
          <input 
            type="text" 
            id="address" 
            value={userData.address} 
            readOnly 
          />
        </div>
        <div className="input-row">
          <label htmlFor="email">E-mail ID:</label>
          <input 
            type="email" 
            id="email" 
            value={userData.email} 
            readOnly 
          />
        </div>
        <div className="input-row">
          <label htmlFor="phoneNo">Phone No:</label>
          <input 
            type="tel" 
            id="phoneNo" 
            value={userData.phoneNo} 
            readOnly 
          />
        </div>
        <div className="input-row password-row">
          <label htmlFor="editPassword">Edit Password:</label>
          <input 
            type="password" 
            id="editPassword" 
            placeholder="New password" 
          />
          <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Confirm password" 
          />
          <button className="save-button">Save</button>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2025 QuickPay Inc. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
    </div>
  );
}

export default Profile;
