import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Favorites from './pages/Favorites'

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
    </>
  )
}

export default App

