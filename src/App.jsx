
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { SidebarComponent } from './components/SidebarComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar />   <div className='flex '>  <SidebarComponent />  <Home /></div>      </>
    },

    {
      path: "/login",
      element: <> <Navbar />    <div className='flex'>  <SidebarComponent />  <Login /></div>                 </>
    },
    {
      path: "/register",
      element: <> <Navbar />       <Signup />  </>
    },
  ])


  return (
    <div className='bg-gradient-to-r from-[#000] to-slate-700 h-auto w-screen '>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
