import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Accueil, Apropos, Planning, Inscription, Contact } from './pages';

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Accueil/> }/>
        <Route path='/Apropos' element={ <Apropos/> }/>
        <Route path='/Planning' element={ <Planning/> }/>
        <Route path='/Inscription' element={ <Inscription/> }/>
        <Route path='/Contact' element={ <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;
