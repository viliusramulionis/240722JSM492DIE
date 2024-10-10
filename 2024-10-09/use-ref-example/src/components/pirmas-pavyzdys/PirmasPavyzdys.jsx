import { useRef } from 'react';

const PirmasPavyzdys = () => {
  // const [color, setColor] = useState('white');
  const localWindow = useRef();

  console.log('Komponentas perkrautas');

  return (
    <>
      <div 
        className="window text-center my-5"
        ref={localWindow}
        style={{
          backgroundColor: 'white'
        }}
      >
        <h2>Pirmas pavyzdys:</h2>
        <button 
          className="btn btn-primary"
          onClick={() => {
            // document.querySelector('.window').style.backgroundColor = 'black';
            // setColor('black');
            localWindow.current.style.backgroundColor = 'black'
          }}
        >Paspausk Mane</button>
      </div>
    </>
  )
}

export default PirmasPavyzdys
