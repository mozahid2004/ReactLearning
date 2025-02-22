import { useState } from 'react'
import Header from './Component/Header'
import SearchBar from './Component/SearchBar'
import DropDown from './Component/DropDown'
import CountiesContainer from './Component/CountiesContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="filter-section">
        <SearchBar />
        <DropDown />
      </div>
      <CountiesContainer/>
    </>
  )
}

export default App
