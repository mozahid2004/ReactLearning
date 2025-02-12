import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UseContextProvider'


function App() {


  return (
    <UserContextProvider>
     <h1>Lorem ipsum, dolor sit amet  </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
