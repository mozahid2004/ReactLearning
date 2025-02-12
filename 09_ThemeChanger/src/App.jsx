import {useState, useEffect} from 'react'
import ButtonUI from './Components/ButtonUI'
import Card from './Components/Card'
import { ThemeProvider } from './Context/Theme'

function App() {

  const [themeMode, setThememode] = useState('light')

  const lightTheme = () => {
    setThememode("light")
  }
  const darkTheme = () => {
    setThememode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ButtonUI />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
