const FormDataExample = () => { 

    console.log('Įvyko perkrovimas FormDataExample komponente')
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const data = {};
  
      const form = new FormData(e.target);
  
      for(const entry of form.entries()) {
        data[entry[0]] = entry[1];
      }
  
      console.log(data);

      localStorage.setItem('data', JSON.stringify(data));
    }
  
    return (
      <>
        <div className="container my-3">
          <h2 className="mb-5">Form Data Example</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text"
                placeholder="Įveskite vardą"
                name="vardas"
                className="form-control"
                defaultValue="Vilius"
              />
            </div>
            <div className="mb-3">
              <input 
                type="text"
                placeholder="Įveskite pavardę"
                name="pavarde"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input 
                type="text"
                placeholder="Įveskite adresą"
                name="adresas"
                className="form-control"
              />
            </div>
            <div>
              <button className="btn btn-primary">Siųsti</button>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default FormDataExample
  