import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Profile from '../profile/Profile';
import './Header.css';

const Header = ({ user }) => {
    return (
        <header className="py-3">
            <div className="container d-flex justify-content-between">
                <div className="logo">
                    <Link 
                        to="/" 
                        className="d-flex gap-1 align-items-center"
                    >
                        
                        <img src={logo} style={{
                            maxWidth: 30
                        }}/>

                        <h6 className="m-0" style={{
                            fontWeight: 800, 
                            fontSize: 18,
                            lineHeight: '18px'
                        }}>VCStube</h6>

                    </Link>
                </div>
                
                    <div className="d-flex gap-3 align-items-center">
                        { user ?
                            <>
                                <Link 
                                    to="/new-video" 
                                    className="btn btn-primary"
                                >New Video</Link>
                                <Profile user={user} />
                            </>
                            
                        : 
                            <Link 
                                to="/login" 
                                className="btn btn-warning"
                            >Login</Link>
                        }
                    </div>
                
            </div>
        </header>
    );
}

export default Header;