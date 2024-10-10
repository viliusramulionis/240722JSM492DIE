import { useRef } from 'react';

const KetvirtasPavyzdys = () => {
    const formRef = useRef();

    const Forma = () => {
        return (
            <form 
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Formos duomenys priimti')
                }}
            >
                <input type="text" placeholder="Įveskite savo vardą"/>
            </form>
        )        
    }

    const Button = () => {
        return (
            <button 
                className="btn btn-danger"
                onClick={() => formRef.current.submit()}
            >Siųsti</button>
        );
    }

    return (
        <>
            <header>
                <Forma />
            </header>
            <main>
                <article>
                    <Button />
                </article>
            </main>
        </>
    );

}   

export default KetvirtasPavyzdys;