import { useState } from 'react';
import './Quantity.css';

const Quantity = () => {
    let [number, setNumber] = useState(0);

    const handleIncrease = () => {
        if(number < 100)
            setNumber(number + 1);
    }

    const handleDecrease = () => {
        if(number > 0)
            setNumber(number - 1);
    }

    return (
        <>  
            <h2>Quantity</h2>
            <div className="quantity">
                <span onClick={handleDecrease}>-</span>
                <input 
                    type="number" 
                    value={number} 
                    // onChange={(e) => setNumber(e.target.value)} 
                    readOnly
                />
                <span onClick={handleIncrease}>+</span>
            </div>
        </>
    );
}

export default Quantity;