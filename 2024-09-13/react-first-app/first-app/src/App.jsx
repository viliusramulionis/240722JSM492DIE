import Header from './components/header/Header';
import './App.css';

// Direktorijų struktūroje failus vadiname iš didžiūjų raidžių (PascalCase), o directorijas iš mažūjų
// Prie failo pavadinimo būtina galūnė .jsx kuomet komponentas grąžina JSX kodą
// Aprašyta funkcija react'e yra vadinama komponententu
// Komponentų pavadinimai rašomi iš didžiosios raidės
const App = () => {
  // Kiekvienas komponentas gali grąžinti atgal JSX kodą 
  // Kiekvienas JSX komponentas privalo grąžinti tik vieną ewlementą
  // <> žymi fragmentą (tuščią elementą)
  // JSX struktūroje visi savaime užsidarantys elementai turi baigtis pasviru brūkšniu <img />
  
  const vardas = 'Aloyzas';
  
  return (
    <>
      <main>
        <div className="row">
          <Header />
        </div>
        <h1>Sveiki visi, mano vardas {vardas}</h1>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, porro.</div>
      </main>
    </> 
  )
}

export default App
