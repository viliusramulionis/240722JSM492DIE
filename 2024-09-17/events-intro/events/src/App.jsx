import { useState } from 'react';
import Button from './components/button/Button'
import Product from './components/product/Product';
import './App.css'
import AddToCart from './components/add-to-cart/AddToCart';


const App = () => {
  const [text, setText] = useState('');
  const [qty, setQty] = useState(0);
  const [productQty, setProductQty] = useState(0);

  console.log('App komponentas užkrautas');
  
  return (
    <>
      <h1>Events</h1>

      <h2>Pirmas pavyzdys:</h2>
      <Button />

      <h2>Antras pavyzdys:</h2>
      <input 
        type="text"
        placeholder="Įveskite tekstą"
        onChange={(e) => setText(e.target.value)}
      /> 
      <div>Įvestas tekstas: {text}</div>

      <h2>Trečias pavyzdys:</h2>

      <Product qty={qty} setQty={setQty} />

      <div>Įvestas kiekis: {qty}</div>

      <h3>Ketvirtas pavyzdys:</h3>

      <AddToCart setProductQty={setProductQty} />

      <div>Produktai krepšelyje: {productQty}</div>
    </>
  )
}

export default App
