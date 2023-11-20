import './App.css';
import { Accueil } from './pages/Accueil';
import { Apropos } from './pages/Apropos';
import { Contact } from './pages/Contact';
import { Inscription } from './pages/Inscription';
import { Planning } from './pages/Planning';
import { Routes, Route, NavLink } from 'react-router-dom';

function App () {
  return (
    <div>
      <nav>
        <NavLink to='/'>Accueil</NavLink><br></br>
        <NavLink to='/Apropos'>Apropos</NavLink><br></br>
        <NavLink to='/Contact'>Contact</NavLink><br></br>
        <NavLink to='/Inscription'>Inscription</NavLink><br></br>
        <NavLink to='/Planning'>Planning</NavLink>
      </nav>
          <Routes>
            <Route path='/' element={ <Accueil/> }/>
            <Route path='/Apropos' element={ <Apropos/> }/>
            <Route path='/Contact' element={ <Contact/> }/>
            <Route path='/Inscription' element={ <Inscription/> }/>
            <Route path='/Planning' element={ <Planning/> }/>
          </Routes>
    </div>
  );
}

export default App;
