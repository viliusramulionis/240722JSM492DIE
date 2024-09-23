import { useState, useEffect } from 'react';
import { extractFormData, random } from '../../helpers/helpers.js';

const FormDataPasswordGenerator = () => {
    const [data, setData] = useState();
    const [passwords, setPasswords] = useState([]);

    // const passwords = JSON.parse(localStorage.getItem('data'));

    // Begalinis ciklas
    // setPasswords(JSON.parse(localStorage.getItem('data')));

    useEffect(() => {
        setPasswords(JSON.parse(localStorage.getItem('data')));
    }, [data]);

    const handleForm = (e) => {
        e.preventDefault();

        const formData = extractFormData(e.target);

        let pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        if(formData.numbers) {
            pool += '0123456789';
        }

        if(formData.symbols) {
            pool += '!@#$%^&*()';
        }

        let generatedPass = '';

        for(let i = 0; i < formData.length; i++) {
            generatedPass += pool[random(0, pool.length - 1)];
        }

        setData(generatedPass);

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
            <div className="generator">
                <h1>Password Generator with FormData</h1>
                {data && 
                    <div className="mb-2">
                        <strong>Generated password:</strong>
                        <div>{data}</div>
                    </div>
                }
                <form onSubmit={handleForm}>
                    <div className="row align-items-end">
                        <div className="col">
                            <label>Length</label>
                            <input 
                                type="number"
                                className="form-control"
                                defaultValue="6"
                                name="length"
                            /> 
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <label>Numbers</label>
                            <input 
                                type="checkbox" 
                                className="form-check-input"
                                name="numbers"
                                defaultValue="1"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                                defaultChecked
                            />
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <label>Symbols</label>
                            <input 
                                type="checkbox" 
                                className="form-check-input"
                                name="symbols"
                                defaultValue="1"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </div>
                        <div className="col">
                            <button 
                                className="btn btn-primary"
                            >Generate</button>
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

export default FormDataPasswordGenerator;