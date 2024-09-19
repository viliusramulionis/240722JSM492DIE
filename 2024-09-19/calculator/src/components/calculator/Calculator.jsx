import { useState } from 'react';
import './Calculator.css';
import Button from '../button/Button';

const Calculator = () => {
    const [firstDigit, setFirstDigit] = useState('');
    const [action, setAction] = useState();
    const [secondDigit, setSecondDigit] = useState('');
    const [result, setResult] = useState();

    const handleDigit = (e) => {
        if(Number.isInteger(+e.target.textContent)) {
            if(action) {
                if(+secondDigit === 0 && secondDigit !== '') {
                    // Pradzioje yra nulis
                    setSecondDigit(e.target.textContent);
                } else {
                    setSecondDigit(secondDigit + e.target.textContent);
                }
            } else {
                if(+firstDigit === 0 && firstDigit !== '') {
                    // Pradzioje yra nulis
                    setFirstDigit(e.target.textContent);
                } else {
                    setFirstDigit(firstDigit + e.target.textContent);
                }
            }
        } 
        
        // else if(e.target.textContent === '=') {
        //     if(action === '+') {
        //         setResult(firstDigit + secondDigit);
        //     }

        //     if(action === '-') {
        //         setResult(firstDigit - secondDigit);
        //     }

        //     if(action === '*') {
        //         setResult(firstDigit * secondDigit);
        //     }

        //     if(action === '/') {
        //         setResult(firstDigit / secondDigit);
        //     }

        // } else {
        //     setAction(e.target.textContent);
        // }
    }

    const handleResult = () => {
        const first = +firstDigit;
        const second = +secondDigit;

        // if(action === '+') {
        //     setResult(first + second);
        // }

        // if(action === '-') {
        //     setResult(first - second);
        // }

        // if(action === '*') {
        //     setResult(first * second);
        // }

        // if(action === '/') {
        //     setResult(first / second);
        // }

        const actions = {
            '+' : (a, b) => a + b,
            '-' : (a, b) => a - b,
            '*' : (a, b) => a * b,    
            '/' : (a, b) => a / b    
        }

        setResult(actions[action](first, second));

    }

    const handleAction = (e) => {
        setAction(e.target.textContent);
    }

    const handleClear = (e) => {
        setFirstDigit('');
        setSecondDigit('');
        setResult('');
        setAction('');
    }

    // const Buttons = () => {
    //     const res = [];

    //     for(let i = 9; i >= 0; i--) {
    //         res[res.length] = <Button handleClick={handleClick}>{i}</Button> 
    //     }

    //     return res;
    // }

    const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    return (
        <>
            <h2>Calculator</h2>
            <div className="trail">
                <span>{firstDigit}</span> 
                <span>{action}</span>
                <span>{secondDigit}</span>
                {result && 
                    <span>={result}</span>
                }
            </div>
            <div className="calculator">
                <div className="digits">
                    {digits.map(value => 
                        <Button 
                            handleClick={handleDigit}
                            key={value}
                        >
                            {value}
                        </Button>
                    )}
                    
                    <Button 
                        handleClick={handleResult}
                        active={true}
                    >=</Button>
                    <Button 
                        handleClick={handleClear}
                        active={true}
                    >C</Button>
                </div>
                <div className="actions">
                    <Button 
                        handleClick={handleAction}
                    >+</Button>
                    <Button 
                        handleClick={handleAction}
                    >-</Button>
                    <Button 
                        handleClick={handleAction}
                    >*</Button>
                    <Button 
                        handleClick={handleAction}
                    >/</Button>
                </div>
            </div>
        </>
    );
}

export default Calculator;