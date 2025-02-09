import { useState, useCallback, useEffect } from 'react';

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_-{}[]`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="conatiner">
        <center>
          <div className="mainInput">
            <input
              type="text"
              value={password}
              placeholder="Password "
              readOnly
              id="mainInput" />
            <button id="submit">Copy</button>
          </div>
        </center>
        <div className="option">
          <input
            type="range"
            id="charCount"
            min={6}
            max={40}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="charCount">length({length})</label>
          <input
            type="checkbox"
            id="num"
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="num">Number</label>
          <input
            type="checkbox"
            id="specialChar"
            defaultChecked={numberAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }} />
          <label htmlFor="specialChar">Special Character</label>
        </div>
      </div>
    </>
  )
}

export default App
