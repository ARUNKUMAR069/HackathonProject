import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
function App() {


  return (
    <div className='bg-gradient-to-r from-[#000] to-slate-700 h-full w-screen '>
<Navbar/>
<Login/>
    </div>
    
  )
}

export default App
