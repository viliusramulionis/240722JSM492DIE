import FormDataPasswordGenerator from './components/form-data-password-generator/FormDataPasswordGenerator';
import StatePasswordGenerator from './components/state-password-generator/StatePasswordGenerator';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <FormDataPasswordGenerator />
      <StatePasswordGenerator />
    </div>
  );
}

export default App;
