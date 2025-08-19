import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  // Simulated user data - in a real app this would come from authentication
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    lastLogin: '2025-08-18 15:30'
  }
  
  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        
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
        
        <div className="dashboard-actions">
          <Link to="/">
            <button className="secondary-btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
