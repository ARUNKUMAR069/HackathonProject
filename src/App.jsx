import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Landing /></>
    },

    {
      path: "/login",
      element: <> <Navbar /> <Login /></>
    },
    {
      path: "/register",
      element: <> <Navbar /> <Signup /></>
    },
  ])


  return (
    <div className='bg-gradient-to-r from-[#000] to-slate-700 h-full w-screen '>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
