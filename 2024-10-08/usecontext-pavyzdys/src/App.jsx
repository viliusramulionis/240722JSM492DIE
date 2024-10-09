import { useState } from 'react'
import './App.css'
import A from './components/a/A'
import MainContext from './context/MainContext';

function App() {
  const [count, setCount] = useState(0);
  const data = {
    setCount
  }

  return (
    <>
        <MainContext.Provider value={data}>
          <h3>Count reikšmė yra: {count}</h3>
          <A />
        </MainContext.Provider>
    </>
  )
}

export default App
