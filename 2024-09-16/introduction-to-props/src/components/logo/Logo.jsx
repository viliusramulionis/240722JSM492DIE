import logo from '../../assets/logo.svg';

const Logo = () => {
    return (
        <div className="d-flex align-items-center gap-1">
            <img src={logo} style={{ height: 24 }} />
            <strong>Vite</strong>
        </div>
    );
}

export default Logo;