import { useState } from 'react';

const Button = () => {
    // Pirmoje pozicijoje atsiduria reikšmė
    // Antroje funkcija kuri skirta tą reikšmę keisti
    const [counter, setCounter] = useState(0);

    console.log('Komponentas uzkrautas');

    const handleClick = (e) => {
        // document.querySelector() - NEVARTOJAME REACT APLINKOJE
        console.log('Paleistas perkrovimas');
        //counter = 0
        setCounter(counter + 1);

        // counter = 0
        // counter reiksme nepasikeicia 
        console.log(counter);
    }

    return (
        <>
            <button onClick={handleClick}>Paspausk Mane</button>
            <div>{counter}</div>
        </>
    )
}

export default Button;