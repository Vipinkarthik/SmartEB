import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles/scanread.css';

function ScanReadings() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();  // Initialize navigate hook

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageUrl = canvasRef.current.toDataURL();
    console.log(imageUrl); 
    setIsCameraOpen(false); 
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setIsCameraOpen(false);
  };

  const handleLogout = () => {
    // Perform any additional logout tasks (like clearing session data) if needed
    navigate('/login');  // Navigate to the login page
  };

  return (
    <div className="scan-readings-container">
      <div className="section-header"></div>
      <div className="top-nav">
        <div className="scan-readings-title">
          <span role="img" aria-label="camera">📸</span> Scan Readings
        </div>
        <div className="user-info">
          <span role="img" aria-label="user">👤</span>
          <button className="logout-button" onClick={handleLogout}>Logout-&gt;</button> {/* Add onClick to handle logout */}
        </div>
      </div>
      <div className="form-area">
        <div className="input-row">
          <label htmlFor="consumerNo">Consumer No :</label>
          <input type="text" id="consumerNo" placeholder="Enter Consumer No" />
          <button className="enter-button">Enter</button>
        </div>
        <div className="input-row">
          <label htmlFor="consumerName">Consumer Name :</label>
          <input type="text" id="consumerName" placeholder="Consumer Name" />
          <label className="meter-no-label" htmlFor="meterNo">Meter No :</label>
          <input type="text" id="meterNo" value="00000000" readOnly />
        </div>
        <div className="input-row">
          <label htmlFor="previousReading">Previous Month Reading :</label>
          <input type="text" id="previousReading" value="0000.00 kwh" readOnly />
        </div>
        <div className="input-row">
          <label htmlFor="scanReadings">Scan Readings :</label>
          <button className="scan-button" onClick={startCamera}>Click Here to Scan</button>
          <span role="img" aria-label="camera" className="camera-icon">📸</span>
        </div>
        {isCameraOpen && (
          <div className="camera-container">
            <video ref={videoRef} width="100%" height="auto" autoPlay></video>
            <button className="capture-button" onClick={captureImage}>Capture</button>
            <button className="stop-button" onClick={stopCamera}>Stop Camera</button>
            <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
          </div>
        )}
        <div className="input-row">
          <label htmlFor="currentReading">Current Reading :</label>
          <input type="text" id="currentReading" value="0000.00 kwh" readOnly />
          <label htmlFor="amount">Amount :</label>
          <input type="text" id="amount" />
        </div>
        <button className="submit-button">Submit</button>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 ScanReadings Inc. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
    </div>
  );
}

export default ScanReadings;
