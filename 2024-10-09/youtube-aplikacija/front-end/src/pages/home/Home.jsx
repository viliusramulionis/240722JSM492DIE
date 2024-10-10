import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL} from '../../utils/config';
import Videos from '../../components/videos/Videos.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();
    const [sorting, setSorting] = useState();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    
    useEffect(() => {
        const query = new URLSearchParams();

        if(sorting)
            query.append('sort', sorting);
        
        if(selectedCategory) 
            query.append('category', selectedCategory);

        const url = BASE_URL + '/api/video/?' + query.toString();
        // console.log(url);
        axios.get(url)
            .then(resp => {
                if (resp.data.length === 0) {
                    setData([]);
                    return setMessage({
                        data: 'There are no videos yet uploaded',
                        status: 'warning'
                    });
                }

                setData(resp.data)
                setMessage(false);
            });
    }, [sorting, selectedCategory]);

    useEffect(() => {
        axios.get(BASE_URL + '/api/category/')
        .then(resp => setCategories(resp.data));
    }, []);
    
    return (
        <div className="container">
            <div className="d-flex justify-content-between py-3">
                <h1>Youtube</h1>
                <div className="d-flex gap-3 align-items-center">
                    <label style={{ minWidth: 100 }}>Sort videos:</label>
                    <select 
                        className="form-control"
                        onChange={(e) => setSorting(e.target.value)}
                    >
                        <option value="">Position</option>
                        <option value="views">View Count</option>
                        <option value="createdAt">Date</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
            <div className="d-flex gap-2 mb-4">
                {categories.map(el => 
                    <button 
                        key={el._id} 
                        className='btn btn-secondary'
                        onClick={() => setSelectedCategory(el._id)}
                    >{el.name}</button>
                )}
            </div>
            {message &&
                <div className={'alert alert-' + message.status}>
                    {message.data}
                </div>
            }
            <Videos data={data} />
        </div>
    );
}

export default Home;