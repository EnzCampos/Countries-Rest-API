import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Country from './Country.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/fontawesome-free-regular'

function App() {
  return (
    <div>
      <header className='header'>
        <h1 className='title'>Where in the world?</h1>
        <div className='dark-mode'><FontAwesomeIcon icon={faMoon} /> Dark Mode</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name/:country" element={<Country />} />
        <Route path="/code/:code" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
