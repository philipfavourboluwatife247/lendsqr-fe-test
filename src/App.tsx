import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* We'll add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
