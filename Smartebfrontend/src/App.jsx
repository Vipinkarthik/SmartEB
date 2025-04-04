import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Dashboard from './components/dashboard';
import QuickPay from './components/quickpage';
import ScanReadings from './components/scanread';
import EReceipt from './components/ereciept';
import Profile from './components/Profile';
import About from './components/About'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quickpage" element={<QuickPay />} />
        <Route path="/scanread" element={<ScanReadings />} />
        <Route path="/ereciept" element={<EReceipt />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />  {/* ✅ Added About Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
