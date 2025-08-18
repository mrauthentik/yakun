import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Home from './Home'
function App() {
  
   return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<h2>404 the Page is not found</h2>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
   )
}

export default App
