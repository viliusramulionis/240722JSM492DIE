import { useState } from 'react';
import './Form.css';

const Form = () => {
    console.log('Įvyko perkrovimas Form komponente');

    const [data, setData] = useState({
        vardas: 'Vilius',
        pavarde: '',
        adresas: ''
    }); 

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className="container mt-5">
                <h2>Forma</h2>
                <form>
                    <input 
                        type="text" 
                        name="vardas"
                        placeholder="Įveskite savo vardą"
                        className="form-control"
                        onChange={handleChange}
                        value={data.vardas}
                    />
                    <input 
                        type="text" 
                        name="pavarde"
                        placeholder="Įveskite savo pavardę"
                        className="form-control"
                        onChange={handleChange}
                        value={data.pavarde}
                    />
                    <input 
                        type="text" 
                        name="adresas"
                        placeholder="Įveskite savo adresas"
                        className="form-control"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary">Siųsti</button>
                </form>
            </div>
        </>
    );
}

export default Form;