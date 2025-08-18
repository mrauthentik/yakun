import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
const Login = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <div className="login">
            <h1>Login details</h1>
            <form >
                <input 
                    type="email" 
                    placeholder="input email" 
                    required 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <input 
                    type="password" 
                    placeholder="input password" 
                    required 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button> Submit</button>
            </form>
        </div>
    )
}

export default Login