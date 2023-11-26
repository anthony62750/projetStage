import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Utilisation de l'icône du menu depuis React Icons
import logo from "./logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-[#191718] drop-shadow-xl z-50 fixed top-0 w-full'>
      {/* Barre de navigation */}
      <nav id="navbar" className='bg-[#191718] p-5 flex flex-col lg:flex-row lg:justify-between items-center'>
        {/* Logo */}
        <a href="/" ><img className='w-20 mb-4 lg:mb-0 lg:mr-8' src={logo} alt="Logo"></img></a>
        
        {/* Titre du site */}
        <div className='text-[#E0E5E9] flex items-center '>
          <h1>LA MERICOURTOISE</h1>
        </div>
        
        {/* Bouton du menu hamburger pour les écrans mobiles et tablettes */}
        <div className="lg:hidden">
          <button className="p-2 bg-[#0a62d0] rounded" onClick={toggleMenu}>
            <FiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Liste des liens de navigation */}
        <ul className={`flex items-center ${menuOpen ? 'flex-col lg:flex-row lg:items-center' : 'hidden lg:flex'}`}>
          <li className={`p-5 ml-20 ${pathname === '/Apropos' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Apropos" onClick={toggleMenu}>À Propos</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Planning' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Planning" onClick={toggleMenu}>Planning</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Inscription' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Inscription" onClick={toggleMenu}>Inscription</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Contact' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
