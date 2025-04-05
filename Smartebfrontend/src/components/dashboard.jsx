import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/dashboard.css';
import manImage from '../assets/man.png';
import quickPayImage from '../assets/Cash-Drawing.png';
import eReceiptImage from '../assets/MONEY.png';
import '../styles/navbar.css';

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
        <Link to="/dashboard" style={{ cursor: 'pointer' }}>Home</Link>
        <Link to="/about" style={{ cursor: 'pointer' }}>About</Link>
        <Link to="/scanread" style={{ cursor: 'pointer' }}>Scan Reading</Link>
        <Link to="/quickpage" style={{ cursor: 'pointer' }}>Quick Pay</Link>
        <Link to="/ereciept" style={{ cursor: 'pointer' }}>E-Receipt</Link>
        <Link to="/profile" style={{ cursor: 'pointer' }}>Profile</Link>
      </div>
    </div>
  );
}

export default Dashboard;
