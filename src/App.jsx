import React from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';
import { Accueil, Apropos, Planning, Inscription, Contact } from './pages';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Mentions } from './components/footer/Mentions';
import { Politiques } from './components/footer/Politiques';
// import { hydrate, render } from "react-dom";

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
        <Route path='/Mentions' element={ <Mentions/> }/>
        <Route path='/Politiques' element={<Politiques />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }

export default App;
