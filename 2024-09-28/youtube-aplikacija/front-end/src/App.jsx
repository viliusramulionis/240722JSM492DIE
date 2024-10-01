import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/video/')
    .then(resp => resp.json())
    .then(resp => setData(resp));
  }, []);

  return (
    <>
      <h1>Youtube</h1>
      {data.map(el => <h3 key={el._id}>{el.title}</h3>)}
    </>
  )
}

export default App
