import './App.css'
import Calculator from './components/calculator/Calculator.jsx';
import Quantity from './components/quantity/Quantity.jsx';
import Form from './components/form/Form.jsx';

const App = () => {
  return (
    <>
      <Quantity />
      <Calculator />
      <Form />
    </>
  );
}

export default App
