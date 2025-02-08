import { useState } from 'react'

function App() {
  // Declare the state for color
  const [color, setColor] = useState('olive')

  // Function to change the color
  const ChangeColor = (paraColor) => {
    setColor(paraColor)
  }

  return (
    <>
      <div className="boxColor" style={{ backgroundColor: color}}>
        {/* Box with dynamic background color */}
      </div>
      <div className="colorBtns">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('green')}
        >
          Green
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('pink')}
        >
          Pink
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('yellow')}
        >
          Yellow
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('gray')}
        >
          Gray
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('red')}
        >
          Red
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('blue')}
        >
          Blue
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('purple')}
        >
          Purple
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => ChangeColor('orange')}
        >
          Orange
        </button>
      </div>
    </>
  )
}

export default App
