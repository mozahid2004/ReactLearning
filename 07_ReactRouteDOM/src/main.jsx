import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './Components/Home/home.jsx'
import React from 'react'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'


// 1st method 
const router = createBrowserRouter([
  {
    path : '/',
    element : <LayOut/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'user/:userId',
        element : <User/>
      },
      {
        path : 'github',
        element : <GitHub/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// Loader Hooks is pendind