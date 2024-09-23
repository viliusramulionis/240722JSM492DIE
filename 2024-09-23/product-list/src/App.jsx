import { useState, useEffect } from 'react';
import { extractFormData } from './helpers/helpers.js';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('data');
    
    if(localData) {
      setProducts(JSON.parse(localData));
    }
  }, []);


  const handleForm = (e) => {
    e.preventDefault(); 

    const formData = extractFormData(e.target);

    products.push(formData.title);

    setProducts([...products]);

    localStorage.setItem('data', JSON.stringify(products));
  } 

  const handleDelete = (index) => {
    products.splice(index, 1);
    setProducts([...products]);``
    localStorage.setItem('data', JSON.stringify(products));
  }

  return (
    <div 
      className="container mt-5" 
      style={{ maxWidth: 768 }}
    >
      <form 
        onSubmit={handleForm}
        className="input-group"
      >
        <input 
          type="text"
          placeholder="Įveskite produkto pavadinimą"
          className="form-control"
          name="title"
        />
        <button className="btn btn-primary">Pridėti</button>
      </form>
      <ul className="list-group mt-3">
        {products.map((value, index) => 
          <li 
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{value}</span>
            <i 
              onClick={() => handleDelete(index)}
              className="bi bi-trash"
            ></i>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App
