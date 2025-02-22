import { useState } from 'react'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'


function App() {

  return (
    <>
      <Provider store={store}>
        <h1>ReduxToolkit</h1>
        <Addtodo />
        <Todos />
      </Provider>
    </>
  )
}

export default App
