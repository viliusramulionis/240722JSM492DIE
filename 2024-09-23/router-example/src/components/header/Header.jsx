import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-4">
                    <h1>Logo</h1>
                    <nav>
                        <ul className="list-unstyled gap-4 d-flex justify-content-between">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;