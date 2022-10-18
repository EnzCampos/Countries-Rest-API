import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.js'
import Country from './Country.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/name/:country" element={<Country />} />
      <Route path="/code/:code" element={<Country />} />
    </Routes>
  );
}

export default App;
