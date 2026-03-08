import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Projects'
import End from './End'
import ParticleOrb from './ParticleOrb'
function App() {

  return (
    <>
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/skills"element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<End/>}/>
      </Routes>
    </BrowserRouter>
    {/* <ParticleOrb/> */}
    </>
  )
}

export default App
