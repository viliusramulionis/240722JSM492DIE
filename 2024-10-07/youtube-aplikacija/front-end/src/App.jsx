import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NewVideo from './pages/new-video/NewVideo';
import Header from './components/header/Header';
import SingleVideo from './pages/single-video/SingleVideo';
import Channel from './pages/channel/Channel';
import Login from './pages/login/Login';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/new-video" element={ <NewVideo />}/>
          <Route path="/single-video/:id" element={ <SingleVideo />}/>
          <Route path="/channel/:id" element={ <Channel />}/>
          <Route path="/login" element={ <Login />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
