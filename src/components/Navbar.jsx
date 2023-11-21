import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/index.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="navbar" className="navbar">
      <a href="/" className={pathname === '/' ? 'active' : ''}>Accueil</a>
      <a href="/Apropos" className={pathname === '/Apropos' ? 'active' : ''}>A Propos</a>
      <a href="/Planning" className={pathname === '/Planning' ? 'active' : ''}>Planning</a>
      <a href="/Inscription" className={pathname === '/Inscription' ? 'active' : ''}>Inscription</a>
      <a href="/Contact" className={pathname === '/Contact' ? 'active' : ''}>Contact</a>
    </nav>
  );
}

export default Navbar;
