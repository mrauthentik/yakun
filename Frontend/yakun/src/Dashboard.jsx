import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: 'Loading...',
    email: 'Loading...',
    lastLogin: 'Loading...'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem('token');
      
      // If no token exists, redirect immediately
      if(!token) {
        alert('Please Login to access Dashboard');
        navigate('/login');
        return;
      }
      
      try {
        // Attempt to verify token with backend
        const response = await axios.get("https://yakun-c0xy.onrender.com/dashboard", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        // Update user data if available in response
        if (response.data && response.data.user) {
          setUserData({
            name: response.data.user.name || 'User',
            email: response.data.user.email || 'email@example.com',
            lastLogin: new Date().toLocaleString()
          });
        }
        
      } catch (err) {
        console.log("Authentication Error:", err);
        // If authentication fails, clear token and redirect
        localStorage.removeItem('token');
        alert('Authentication failed. Please login again.');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };
    
    // Execute the authentication function
    authenticateUser();
  }, [navigate]);
  
  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        
        {isLoading ? (
          <div className="loading-spinner">
            <p>Loading your dashboard...</p>
          </div>
        ) : (
          <>
            <div className="user-welcome">
              <h2>Welcome back, {userData.name}</h2>
              <p>Last login: {userData.lastLogin}</p>
            </div>
            
            <div className="dashboard-content">
              <div className="dashboard-card">
                <h3>Account Information</h3>
                <div className="user-info">
                  <p><strong>Name:</strong> {userData.name}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                </div>
                <button className="btn-small">Update Profile</button>
              </div>
              
              <div className="dashboard-card">
                <h3>Security Settings</h3>
                <div className="security-options">
                  <p>Manage your security preferences and authentication methods</p>
                  <button className="btn-small">Change Password</button>
                  <button className="btn-small secondary">Enable 2FA</button>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="dashboard-actions">
          <button className="secondary-btn" onClick={handleLogout}>Logout</button>
          <Link to="/">
            <button className="secondary-btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
