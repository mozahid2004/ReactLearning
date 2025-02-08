import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  // we can pass ARRAY and Object here 

  return (
    <>
        <h1 className='bg-amber-700 text-2xl p-4 mb-5'>Mozahid</h1>
        <Card UserName="ChaiAurCode" UserDegignation = "Senier Developer"/>
        <Card UserName="Mozahid" UserDegignation = "Web Developer"/>
    </>
  )
}

export default App
