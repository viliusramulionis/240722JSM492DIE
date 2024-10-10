import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NewVideo from './pages/new-video/NewVideo';
import Header from './components/header/Header';
import SingleVideo from './pages/single-video/SingleVideo';
import Channel from './pages/channel/Channel';
import Login from './pages/login/Login';
import AuthContext from './context/AuthContext';
import ThemeContext from './context/ThemeContext';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('white');

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/check-user')
      .then(resp => setUser(resp.data))
      .catch(err => console.log('Vartotojas neprisijunges'));
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={'theme-' + theme}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single-video/:id" element={<SingleVideo />} />
                <Route path="/channel/:id" element={<Channel />} />
                {user &&
                  <Route path="/new-video" element={<NewVideo />} />
                }

                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
