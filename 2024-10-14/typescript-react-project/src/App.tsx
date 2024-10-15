import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header 
        title="Mano aplikacija" 
        slogan="Kuri išgelbės pasaulį"
        nav={{
          home: 'Titulinis',
          about: 'Apie Mus',
          contact: 'Kontaktai'
        }}
      />
    </>
  )
}

export default App
