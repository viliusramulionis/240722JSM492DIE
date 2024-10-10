import { useRef } from 'react';

const AntrasPavyzdys = () => {
    const nav = useRef();

    console.log('Komponentas perkrautas');

    return (
        <div className="my-5">
            <button 
                className="btn btn-warning"
                onClick={() => nav.current.classList.add('active')}
            >Paspausk mane
            </button>
            <nav className="offcanvas-nav" ref={nav}>
                <span 
                    className="close"
                    onClick={() => nav.current.classList.remove('active')}
                >X</span>
                <ul>
                    <li><a href="#">Titulinis</a></li>
                    <li><a href="#">Apie Mus</a></li>
                    <li><a href="#">Kontaktai</a></li>
                    <li><a href="#">Paskyra</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default AntrasPavyzdys;