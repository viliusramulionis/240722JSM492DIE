import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from "../../utils/common.jsx";
import { BASE_URL } from '../../utils/config';
import axios from 'axios';

const NewVideo = () => {
    const [message, setMessage] = useState();
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + '/api/category/')
        .then(resp => setCategories(resp.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const data = new URLSearchParams(extractFormData(e.target));
        const data = new FormData(e.target); //multipart form data

        data.append('user', '66fe51681112f28c79b73edc'); // Laikinas sprendimas

        axios.post(BASE_URL + '/api/video/', data)
        .then(resp => {
            setMessage({
                data: resp.data.message,
                status: 'success'
            });
            setTimeout(() => {
                navigate('/')
            }, 3000);
        })
        .catch(err => setMessage({
            data: err.response.data,
            status: 'danger'
        }));
    }

    return (
        <div className="container">
            <h1>New Video</h1>
            {message && 
                <div className={'alert alert-' + message.status}>
                    {message.data}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text"
                        name="title"
                        placeholder="Enter video title"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        name="description"
                        placeholder="Enter video description"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="file"
                        name="thumbnail"
                        placeholder="Enter thumbnail url"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text"
                        name="videoId"
                        placeholder="Enter video id"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <select 
                        name="category"
                        className="form-control"
                    >
                        {categories.map(el => 
                            <option key={el._id} value={el._id}>{el.name}</option>
                        )}
                    </select>
                </div>
                <button
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>

    );
}

export default NewVideo;