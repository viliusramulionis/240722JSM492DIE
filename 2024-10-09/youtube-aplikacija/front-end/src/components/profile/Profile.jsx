import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES_URL, BASE_URL } from '../../utils/config.js';
import AuthContext from '../../context/AuthContext.js';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const profileRef = useRef();
    const navigate = useNavigate();

    return (
        <div>
            <Link onClick={(e) => {
                e.preventDefault();

                profileRef.current.classList.add('active');
            }}>
                <img
                    src={IMAGES_URL + user.userThumbnail}
                    style={{
                        width: 35,
                        height: 35,
                        objectFit: 'cover'
                    }}
                    className="rounded-pill"
                />
            </Link>
            <nav className="profile" ref={profileRef}>
                <div className="d-flex justify-content-end">
                    <button 
                        className='btn btn-light btn-sm' 
                        onClick={() => {
                            profileRef.current.classList.remove('active');
                        }}
                    >
                        <i className="bi bi-x fs-5"></i>
                    </button>
                </div>
                <ul>
                    <li><Link 
                            onClick={() => {
                               axios.get(BASE_URL + '/api/user/logout')
                               .then(() => {
                                    setUser(false);
                                    navigate('/');
                               });
                            }}
                        >Logout</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Profile;