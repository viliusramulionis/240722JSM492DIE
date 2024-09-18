import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [data, setData] = useState({
        vardas: 'Vilius'
    }); 

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    }

    return (
        <>
            <h2>Forma</h2>
            <form>
                <div>{data.vardas}</div>
                <input 
                    type="text" 
                    name="vardas"
                    placeholder="Įveskite savo vardą"
                    onChange={handleChange}
                    value={data.vardas}
                />
                <div>{data.pavarde}</div>
                <input 
                    type="text" 
                    name="pavarde"
                    placeholder="Įveskite savo pavardę"
                    onChange={handleChange}
                />
                <div>{data.adresas}</div>
                <input 
                    type="text" 
                    name="adresas"
                    placeholder="Įveskite savo adresas"
                    onChange={handleChange}
                />
                <button>Siųsti</button>
            </form>
        </>
    );
}

export default Form;