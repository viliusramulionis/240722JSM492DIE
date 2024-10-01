import axios from 'axios';
import { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // fetch('http://localhost:3000/api/video/')
      // .then(resp => resp.json())
      // .then(resp => setData(resp));
      
      axios.get('http://localhost:3000/api/video/')
      .then(resp => setData(resp.data));
    }, []);

    return (
        <div className="container">
            <h1>Youtube</h1>
            {data.map(el => <h3 key={el._id}>{el.title}</h3>)}
        </div>
    );
}

export default Home;