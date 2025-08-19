import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
import Home from './Home'
function App() {
  
   return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={
            <div className="not-found">
              <h2>404 - Page Not Found</h2>
              <p>Sorry, the page you are looking for does not exist.</p>
              <Link to="/">
                <button>Return to Home</button>
              </Link>
            </div>
          }/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
   )
}

export default App
