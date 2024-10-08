import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../../utils/common';
import { BASE_URL } from '../../utils/config';
import axios from 'axios';

const Login = () => {
    const [message, setMessage] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = extractFormData(e.target);
        console.log(formData);
        axios.post(BASE_URL + '/api/user/login', formData)
        .then(resp => {
            setMessage({
                data: resp.data,
                status: 'success'
            })

            setTimeout(() => {

            }, 3000);
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