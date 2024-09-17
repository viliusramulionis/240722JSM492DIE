import Product from './components/product/Product.jsx';
import data from './data/products.js';
import './App.css'

const App = () => {

  return (
    <>
      <div className="container">
        {data.products.map(value => 
          <Product key={value.id} data={value} />
        )}
      </div>
    </>
  )
}

export default App
