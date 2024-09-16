import logotipas from '../../assets/apple-logo.svg';
import './Header.css';

const Header = () => {
    // JSX'e vietoj atributo class naudojamas className
    
    return (
        <header>
            <img src={logotipas} className="logo" />
        </header>
    );
}

export default Header;