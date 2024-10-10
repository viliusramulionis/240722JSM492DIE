import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';
import './index.css'

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
