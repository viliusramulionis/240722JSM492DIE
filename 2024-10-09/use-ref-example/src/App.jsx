import PirmasPavyzdys from './components/pirmas-pavyzdys/PirmasPavyzdys'
import AntrasPavyzdys from './components/antras-pavyzdys/AntrasPavyzdys'
import TreciasPavyzdys from './components/trecias-pavyzdys/TreciasPavyzdys'
import KetvirtasPavyzdys from './components/ketvirtas-pavyzdys/KetvirtasPavyzdys'
import './App.css'


const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <PirmasPavyzdys />
      <AntrasPavyzdys />
      <TreciasPavyzdys />
      <KetvirtasPavyzdys />
    </div>
  )
}

export default App
