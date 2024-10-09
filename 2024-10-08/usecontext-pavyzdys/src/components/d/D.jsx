import { useContext } from 'react';
import MainContext from '../../context/MainContext';

const D = () => {

    const { setCount } = useContext(MainContext);

    return (
        <div className="component">
            <h1>Komponentas D:</h1>
            <button onClick={() => setCount(prev => ++prev)}>Paspausk mane</button>
        </div>
    )
}


export default D;