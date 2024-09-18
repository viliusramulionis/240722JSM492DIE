import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [firstDigit, setFirstDigit] = useState();
    const [action, setAction] = useState();
    const [secondDigit, setSecondDigit] = useState();
    const [result, setResult] = useState();

    const handleClick = (e) => {
        if(Number.isInteger(+e.target.textContent)) {
            if(firstDigit) {
                setSecondDigit(+e.target.textContent);
            } else {
                setFirstDigit(+e.target.textContent);
            }
        } else if(e.target.textContent === '=') {
            if(action === '+') {
                setResult(firstDigit + secondDigit);
            }

            if(action === '-') {
                setResult(firstDigit - secondDigit);
            }

            if(action === '*') {
                setResult(firstDigit * secondDigit);
            }

            if(action === '/') {
                setResult(firstDigit / secondDigit);
            }

        } else {
            setAction(e.target.textContent);
        }
    }

    return (
        <>
            <h2>Calculator</h2>
            <div className="trail">{firstDigit} {action} {secondDigit} = {result}</div>
            <div className="calculator">
                <div className="digits">
                    <button onClick={handleClick}>7</button>
                    <button onClick={handleClick}>8</button>
                    <button onClick={handleClick}>9</button>
                    <button onClick={handleClick}>4</button>
                    <button onClick={handleClick}>5</button>
                    <button onClick={handleClick}>6</button>
                    <button onClick={handleClick}>1</button>
                    <button onClick={handleClick}>2</button>
                    <button onClick={handleClick}>3</button>
                    <button onClick={handleClick}>0</button>
                    <button onClick={handleClick}>=</button>
                </div>
                <div className="actions">
                    <button onClick={handleClick}>+</button>
                    <button onClick={handleClick}>-</button>
                    <button onClick={handleClick}>*</button>
                    <button onClick={handleClick}>/</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;