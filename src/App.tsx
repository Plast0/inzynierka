
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { LoginPage } from './components/LoginPage'
import { RequireAuth } from './components/RequireAuth'
import Layout from './components/Layout'
import { RegisterPage } from './components/RegisterPage'
import { Results } from './components/Results'

const App = () => { 

  return (        
        <Routes>
          <Route path='/' element={<Layout />}>            
            <Route element={<RequireAuth />}> 
              <Route path="/" element={<Home />} />            
              <Route path="/wyniki" element={<Results />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
  )
}

export default App
