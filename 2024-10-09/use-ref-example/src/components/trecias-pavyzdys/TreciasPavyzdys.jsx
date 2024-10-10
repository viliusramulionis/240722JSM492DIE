import { useRef } from 'react';

const TreciasPavyzdys = () => {
    const input = useRef();

    return (
        <div className="my-5">
            <input type="text" ref={input} />
            <button 
                className="btn btn-secondary"
                onClick={() => {
                    const el = input.current; 
                    el.focus();
                    el.style.backgroundColor = 'red';
                }}
            >Paspausk Mane</button>
        </div>
    );
}

export default TreciasPavyzdys;