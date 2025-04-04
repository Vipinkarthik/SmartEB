import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import manImage from '../assets/man.png';
import quickPayImage from '../assets/Cash-Drawing.png';
import eReceiptImage from '../assets/MONEY.png';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="home-button">
          <span role="img" aria-label="home">🏠</span> Home
        </div>
        <div className="user-info">
          <img src={manImage} alt="User" className="user-icon" />
          Welcome
          <button className="logout-button" onClick={() => navigate('/login')}>Logout →</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-area">
        <div className="feature-card" onClick={() => navigate('/scanread')}>
          <img src={manImage} alt="Scan Readings" className="feature-image" />
          <div className="feature-title">SCAN READINGS</div>
        </div>
        <div className="feature-card" onClick={() => navigate('/quickpage')}>
          <img src={quickPayImage} alt="Quick Pay" className="feature-image" />
          <div className="feature-title">QUICK PAY</div>
        </div>
        <div className="feature-card" onClick={() => navigate('/ereciept')}>
          <img src={eReceiptImage} alt="E-Receipt" className="feature-image" />
          <div className="feature-title">E-RECEIPT</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</a>  {/* Navigates to About page */}
        <a onClick={() => navigate('/scanread')} style={{ cursor: 'pointer' }}>Scan Reading</a>
        <a onClick={() => navigate('/quickpage')} style={{ cursor: 'pointer' }}>Quick Pay</a>
        <a onClick={() => navigate('/ereciept')} style={{ cursor: 'pointer' }}>E-Receipt</a>
        <a onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>Profile</a>
      </div>
    </div>
  );
}

export default Dashboard;
