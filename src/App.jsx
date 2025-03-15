import { useState } from 'react'

import './App.css'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster />
    <div className='w-full'>
      <NavBar/>
    </div>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
      
    </Routes>

    </>
    
  )
}

export default App
