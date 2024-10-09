import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../../utils/common';
import { BASE_URL } from '../../utils/config';
import axios from 'axios';

const Login = ({ user, setUser }) => {
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if(user)
            return navigate('/');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = extractFormData(e.target);
        
        axios.post(BASE_URL + '/api/user/login', formData)
        .then(resp => {
            setUser(resp.data.data);

            navigate('/');
        })
        .catch(error => {
            setMessage({
                data: error.response.data,
                status: 'danger'
            });
        });
    }

    return (
        <div 
            className="container" 
            style={{ maxWidth: 768 }}
        >
            {message && 
                <div className={'alert alert-' + message.status}>
                    {message.data}
                </div>
            }
           <h1>Login</h1> 
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        required
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;