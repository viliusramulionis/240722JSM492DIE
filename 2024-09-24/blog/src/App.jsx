import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPost from './pages/new-post/NewPost.jsx';
import Posts from './pages/posts/Posts.jsx';
import SinglePost from './pages/single-post/SinglePost.jsx';
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  return (
    <div className="container mt-5">
      <BrowserRouter>
        {/* Routerio prijungimas */}
        <Routes>
          <Route path="/" element={
            <Posts
              data={data}
            />
          } />
          <Route path="/new-post" element={
            <NewPost
              setData={setData}
            />
          } />
          <Route path="/single-post/:irasoID" element={
            <SinglePost />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
