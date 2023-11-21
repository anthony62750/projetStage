import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Accueil } from './pages/Accueil';
import { Apropos } from './pages/Apropos';
import { Planning } from './pages/Planning';
import { Inscription } from './pages/Inscription';
import { Contact } from './pages/Contact';

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
