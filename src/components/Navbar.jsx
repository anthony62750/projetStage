import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from "./logo.png";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className='bg-[#191718] z-50 fixed top-0 w-full'>
      <nav id="navbar" className='bg-[#191718] p-5 flex justify-between'>
        <a href="/" ><img className='w-20' src={logo} alt="Logo"></img></a>
        <ul className='flex items-center'>
          <li className={`p-5 ml-20 ${pathname === '/Apropos' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Apropos">À Propos</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Planning' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Planning">Planning</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Inscription' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Inscription">Inscription</a>
          </li>
          <li className={`p-5 ml-20 ${pathname === '/Contact' ? 'text-[#0a62d0]' : 'text-[#E0E5E9] hover:text-[#0a62d0]'}`}>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;