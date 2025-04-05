import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import '../styles/scanread.css';
import '../styles/navbar.css';
import manImage from '../assets/man.png'; // make sure this path is correct

function ScanReadings() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [consumerNo, setConsumerNo] = useState('');
  const [consumerName, setConsumerName] = useState('');
  const [meterNo, setMeterNo] = useState('');
  const [previousReading, setPreviousReading] = useState('');
  const [currentReading, setCurrentReading] = useState('');
  const [amount, setAmount] = useState('');
  const [tariff, setTariff] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL();

    Tesseract.recognize(imageData, 'eng')
      .then(({ data: { text } }) => {
        const extracted = parseFloat(text.match(/[\d.]+/g)?.[0] || 0).toFixed(2);
        setCurrentReading(`${extracted} kwh`);
        const prev = parseFloat(previousReading) || 0;
        const curr = parseFloat(extracted);
        const units = curr - prev;
        setAmount((units * tariff).toFixed(2));
        stopCamera();
      })
      .catch(err => {
        console.error("OCR error:", err);
        stopCamera();
      });
  };

  const fetchConsumerDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/consumer/${consumerNo}`);
      const data = await response.json();
      setConsumerName(data.name);
      setMeterNo(data.meterNo);
      setPreviousReading(data.previousReading);
      setTariff(data.tariff);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Consumer not found.");
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="scan-readings-page">
      {/* ✅ Updated Top Navigation Bar */}
      <div className="top-nav">
        <div className="home-button">
          <span role="img" aria-label="scan">📷</span> Scan Readings
        </div>
        <div className="user-info">
          <img src={manImage} alt="User" className="user-icon" />
          Profile
          <button className="logout-button" onClick={handleLogout}>Logout →</button>
        </div>
      </div>

      <div className="scan-readings-container">
        <div className="form-area">
          <div className="input-row">
            <label htmlFor="consumerNo">Consumer No :</label>
            <input type="text" id="consumerNo" value={consumerNo} onChange={e => setConsumerNo(e.target.value)} />
            <button className="enter-button" onClick={fetchConsumerDetails}>Enter</button>
          </div>

          <div className="input-row">
            <label htmlFor="consumerName">Consumer Name :</label>
            <input type="text" value={consumerName} readOnly />
            <label className="meter-no-label">Meter No :</label>
            <input type="text" value={meterNo} readOnly />
          </div>

          <div className="input-row">
            <label>Previous Month Reading :</label>
            <input type="text" value={previousReading + ' kwh'} readOnly />
          </div>

          <div className="input-row">
            <label>Scan Readings :</label>
            <button className="scan-button" onClick={startCamera}>Click Here to Scan</button>
            <span className="camera-icon">📸</span>
          </div>

          {isCameraOpen && (
            <div className="camera-container">
              <video ref={videoRef} width="100%" autoPlay />
              <button className="capture-button" onClick={captureImage}>Capture</button>
              <button className="stop-button" onClick={stopCamera}>Stop Camera</button>
              <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
            </div>
          )}

          <div className="input-row">
            <label>Current Reading :</label>
            <input type="text" value={currentReading} readOnly />
            <label>Amount :</label>
            <input type="text" value={amount} readOnly />
          </div>

          <button className="submit-button">Submit</button>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>&copy; 2025 ScanReadings Inc. All rights reserved.</p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default ScanReadings;
