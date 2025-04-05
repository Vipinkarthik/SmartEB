import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { jsPDF } from 'jspdf'; 
import '../styles/ereciept.css';
import '../styles/navbar.css';
import manImage from '../assets/man.png'; // make sure this image path is correct

function EReceipt() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/login'); 
  };

  const handleDownload = (consumerNo, consumerName, billAmount, billPaidDate) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('E-Receipt', 20, 20);
    doc.text(`Consumer No: ${consumerNo}`, 20, 30);
    doc.text(`Consumer Name: ${consumerName}`, 20, 40);
    doc.text(`Bill Amount: ${billAmount}`, 20, 50);
    doc.text(`Bill Paid Date: ${billPaidDate}`, 20, 60);
    doc.save(`e-receipt-${consumerNo}.pdf`);
  };

  return (
    <div className="ereceipt-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="home-button">
          <span role="img" aria-label="receipt">🧾</span> E-Receipt
        </div>
        <div className="user-info">
          <img src={manImage} alt="User" className="user-icon" />
          Profile
          <button className="logout-button" onClick={handleLogout}>Logout →</button>
        </div>
      </div>

      <div className="form-area">
        <div className="input-row">
          <label htmlFor="consumerNo">Consumer No :</label>
          <input type="text" id="consumerNo" placeholder="Enter your consumer no" />
          <button className="enter-button">Enter</button>
        </div>
        <div className="table-container">
          <table className="ereceipt-table">
            <thead>
              <tr>
                <th>Consumer No</th>
                <th>Consumer Name</th>
                <th>Bill Amount</th>
                <th>Bill Paid Date</th>
                <th><span role="img" aria-label="download">⬇️</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678</td>
                <td>John Doe</td>
                <td>$150.00</td>
                <td>2025-03-25</td>
                <td>
                  <button 
                    className="download-btn" 
                    onClick={() => handleDownload('12345678', 'John Doe', '$150.00', '2025-03-25')}
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td>87654321</td>
                <td>Jane Smith</td>
                <td>$200.00</td>
                <td>2025-03-24</td>
                <td>
                  <button 
                    className="download-btn" 
                    onClick={() => handleDownload('87654321', 'Jane Smith', '$200.00', '2025-03-24')}
                  >
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 E-Receipt Inc. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
    </div>
  );
}

export default EReceipt;
