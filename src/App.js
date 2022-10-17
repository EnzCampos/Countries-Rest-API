import React from 'react'
import { Route, Routes } from 'react-router-dom'
import home from './homepage.js'
import country from './countrypage.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={home}/>
      <Route path='/:country' element={country}/>
    </Routes>
  );
}

export default App;
