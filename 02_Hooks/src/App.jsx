import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(3)

  const addValue = () => {
    counter < 5? setCounter(counter + 1) : ""
  }
  const removeValue = () => {
    counter > 0 ?  setCounter(counter - 1) : 0
  }

  return (
    <>
      <h1>Mozahid Khan</h1>
      <h2>counter : {counter}</h2>

    
      <button onClick={addValue}>Add Value : {counter}</button>
      <button onClick={removeValue}>Remove Value : {counter}</button>

      <h2>Footer : {counter}</h2>
    </>
  )
}

export default App
