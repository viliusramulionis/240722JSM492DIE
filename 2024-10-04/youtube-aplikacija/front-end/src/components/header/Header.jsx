import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
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
                <div>
                    <Link 
                        to="/new-video" 
                        className="btn btn-primary"
                    >New Video</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;