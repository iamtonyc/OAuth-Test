import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const GOOGLE_CLIENT_ID = "733950366950-6id209bc28odo376q3hpjiohfs6qdq16.apps.googleusercontent.com";

function App() {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          {/* Page 1: Login */}
          <Route 
            path="/" 
            element={!user ? <LoginPage setUser={setUser} /> : <Navigate to="/dashboard" />} 
          />
          
          {/* Page 2: Dashboard (Protected) */}
          <Route 
            path="/dashboard" 
            element={user ? <DashboardPage user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;