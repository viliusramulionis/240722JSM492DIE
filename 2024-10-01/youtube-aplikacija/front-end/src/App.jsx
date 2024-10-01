import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NewVideo from './pages/new-video/NewVideo';
import Header from './components/header/Header';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/new-video" element={ <NewVideo />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
