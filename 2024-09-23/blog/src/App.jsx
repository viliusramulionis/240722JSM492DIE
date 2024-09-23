import { useState, useEffect } from 'react';
import { extractFormData } from './helpers/helpers.js';
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if(localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = extractFormData(e.target);
    
    formData.date = new Date();
    console.log(formData);
    const newData = [...data, formData];

    setData(newData);

    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        {data.map((value, index) => 
          <div 
            className="col-4 mb-5"
            key={index}
          >
            <img 
              src={value.image} 
              className="rounded-2"
            />
            <div className="mt-4">
              <strong>{value.category}</strong>
              <span>{new Date(value.date).toLocaleString()}</span>
            </div>
            <h4>{value.title}</h4>
            <p>{value.content}</p>
            <div className="d-flex gap-3">
              <img 
                src={value.author_image}
                className="rounded-circle" 
                style={{
                  maxWidth: 45
                }}  
              />
              <div>
                <div>
                  <strong>{value.author}</strong>
                </div>
                <div>{value.author_role}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form 
        style={{ 
          maxWidth: 768,
          margin: '0 auto' 
        }}
        onSubmit={handleForm}
      >
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Title"
            name="title"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Category"
            name="category"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Image"
            name="image"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Content"
            name="content"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Author"
            name="author"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Author Role"
            name="author_role"
          />
        </div>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Post Author Image"
            name="author_image"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App
