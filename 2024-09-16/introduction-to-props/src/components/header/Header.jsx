import Logo from '../logo/Logo.jsx';
import Search from '../search/Search.jsx';
import Navigation from '../navigation/Navigation.jsx';

const Header = () => {
    return (
        <header className="d-flex align-items-center justify-content-between py-3">
            <div className="d-flex gap-4">
                <Logo />
                <Search />
            </div>
            <Navigation />
        </header>
    ); 
}

export default Header;