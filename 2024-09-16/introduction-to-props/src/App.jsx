import Header from './components/header/Header.jsx';
import Intro from './components/intro/Intro.jsx';
import Cards from './components/cards/Cards.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="container" style={{ maxWidth: 1152 }}>
        <Header />
        <Intro />
        <Cards />
      </div>
    </>
  )
}

export default App
