import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
const Register = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    return (
        <div className="login">
            <h1>Register all information</h1>
            <form >
                <input 
                    type="text" 
                    placeholder="input name" 
                    required 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
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


export default Register