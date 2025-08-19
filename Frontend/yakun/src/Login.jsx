import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle login logic
        console.log('Login attempt with:', { email, password })
    }
    
    return (
        <div className="login">
            <div className="container">
                <h1>Welcome Back</h1>
                <p className="form-subtitle">Sign in to your account</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit">Sign In</button>
                </form>
                
                <div className="auth-links">
                    <p>Don't have an account? <Link to="/register">Create one</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login