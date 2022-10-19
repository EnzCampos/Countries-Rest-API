import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Country from './Country.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/fontawesome-free-regular'

function App() {

  const [darkmode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem('darkmode')))

  const darkModeClass = darkmode ? "dark" : ""

  useEffect(()=>{
    localStorage.setItem('darkmode', JSON.stringify(darkmode))
  },[darkmode])

  //Change the route path if you're running this locally.
  
  return (
    <div className={`main-content ${darkModeClass}`}>
      <header className={`header ${darkModeClass}`}>
        <h1 className={`title ${darkModeClass}`}>Where in the world?</h1>
        <button className={`dark-mode-button ${darkModeClass}`} onClick={(e) => setDarkMode(!darkmode)}><FontAwesomeIcon icon={faMoon} /> Dark Mode</button>
      </header>
      <Routes>
        <Route path="/" element={<Home darkmode={darkModeClass}/>} />
        <Route path="/name/:country" element={<Country darkmode={darkModeClass}/>} />
        <Route path="/code/:code" element={<Country darkmode={darkModeClass}/>} />
      </Routes>
    </div>
  );
}

export default App;
