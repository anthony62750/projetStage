import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Accueil, Apropos, Planning, Inscription, Contact } from './pages';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar isHomePage={isHomePage} />
      <main>
      <Routes>
        <Route path='/' element={ <Accueil/> }/>
        <Route path='/Apropos' element={ <Apropos/> }/>
        <Route path='/Planning' element={ <Planning/> }/>
        <Route path='/Inscription' element={ <Inscription/> }/>
        <Route path='/Contact' element={ <Contact/> }/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
