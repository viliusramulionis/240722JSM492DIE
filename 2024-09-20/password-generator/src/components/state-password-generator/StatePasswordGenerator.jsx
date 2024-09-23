import { useState, useEffect } from 'react';
import { random } from '../../helpers/helpers.js';

const StatePasswordGenerator = () => {
    const [data, setData] = useState({});
    const [password, setPassword] = useState();
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        setPasswords(JSON.parse(localStorage.getItem('data')));
    }, [password]);

    const handleChange = (e) => {
        const generatedObj = { ...data, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value};
        setData(generatedObj);
        generatePass(generatedObj);
    }

    const generatePass = (data) => {
        let pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        if(data.numbers) {
            pool += '0123456789';
        }

        if(data.symbols) {
            pool += '!@#$%^&*()';
        }

        let generatedPass = '';

        for(let i = 0; i < data.length; i++) {
            generatedPass += pool[random(0, pool.length - 1)];
        }

        setPassword(generatedPass);

        if(localStorage.getItem('data')) {
            //Duomenų atnaujinimas
            // Ištraukiame informaciją
            // Konvertuojame JSON stringą
            // Papildome masyvą
            // Konvertupojame masyvą į JSON stringą
            // Talpiname JSON stringą į localStorage
            const storage = JSON.parse(localStorage.getItem('data'));
            storage.unshift(generatedPass);
            localStorage.setItem('data', JSON.stringify(storage.slice(0, 10)));
        } else {
            // Duomenų išssaugojimas pirmą kartą
            localStorage.setItem('data', JSON.stringify([generatedPass]));
        } 
    }

    return (
        <>
            <div className="generator mt-5">
                <h1>Password Generator with States</h1>
                {password && 
                    <div className="mb-2">
                        <strong>Generated password:</strong>
                        <div>{password}</div>
                    </div>
                }
                <form>
                    <div className="row align-items-end">
                        <div className="col">
                            <label>Length</label>
                            <input 
                                type="range"
                                className="form-control"
                                defaultValue="6"
                                name="length"
                                value={data.number}
                                min="3"
                                max="100"
                                onChange={(e) => handleChange(e)}
                            /> 
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <label>Numbers</label>
                            <input 
                                type="checkbox" 
                                className="form-check-input"
                                name="numbers"
                                value={data.numbers}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                                defaultChecked
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <label>Symbols</label>
                            <input 
                                type="checkbox" 
                                className="form-check-input"
                                name="symbols"
                                value={data.symbols}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                </form>
                <div className="mt-5">
                    <h2>Latest Generated Passwords</h2>
                    {passwords.map((value, index) => 
                        <li key={index}>{value}</li>
                    )}
                </div>
            </div>
        </>
    );   
}

export default StatePasswordGenerator;