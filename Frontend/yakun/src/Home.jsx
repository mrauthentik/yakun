import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <h1>Welcome to Yakun</h1>
        <p className="home-description">
          Your secure platform for managing digital authentication and identity. 
          Experience seamless access with enhanced security features.
        </p>
        
        <div className="home-features">
          <div className="feature-card">
            <h3>Secure Authentication</h3>
            <p>State-of-the-art security protocols to keep your data protected</p>
          </div>
          <div className="feature-card">
            <h3>User-Friendly</h3>
            <p>Intuitive interface designed for the best user experience</p>
          </div>
          <div className="feature-card">
            <h3>Reliable Service</h3>
            <p>Dependable authentication services you can count on</p>
          </div>
        </div>
        
        <div className="home-buttons">
          <Link to="/register">
            <button>Get Started</button>
          </Link>
          <Link to="/login">
            <button className="secondary-btn">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
