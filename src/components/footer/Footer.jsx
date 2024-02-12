import React from 'react';
import image1 from '../footer/muscle_gauche.png';
import image2 from '../footer/muscle_droit.png';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
    <footer>
      <section className='w-full flex items-center p-1 justify-around bg-[#191718] xs:text-xs sm:text-sm md:text-base lg:text-xl'>

        <div className=''>
          <p className='text-[#E0E5E9]'>Rue Jeannette Prin</p> 
          <p className='text-[#E0E5E9]'>62680 Mericourt</p>
        </div>

        <div>
          <img className='xs:max-w-[40px] sm:max-w-[50px] md:max-w-[70px] lg:max-w-[100px]' src={image1} alt="Muscle_gauche" />
        </div>

        <div className='text-center'>
          <p className='text-[#0a62d0]'>MERICOURTOISE</p>
          <p className='text-[#E0E5E9]'>Association de musculation en autonomie</p>
        </div>

        <div>
          <img className='xs:max-w-[40px] sm:max-w-[50px] md:max-w-[70px] lg:max-w-[100px]' src={image2} alt="Muscle_droit"/>
        </div>

        <div>
          <a href='https://mairie-mericourt.fr/' className='text-[#E0E5E9] hover:text-[#0a62d0] transition-colors'>Site de la mairie</a>
        </div>

      </section>

      <section className='text-center bg-[#000000] text-[#E0E5E9] xs:text-xs sm:text-sm md:text-base lg:text-xl'>
        <p>&copy; {new Date().getFullYear()} MERICOURTOISE. Tous droits réservés. <Link className='text-[#0a62d0]' to='/Mentions'>Mentions Légales.</Link> <Link className='text-[#0a62d0]' to='/Politiques'>Politique de Confidentialité.</Link></p>
      </section>

    </footer>
 );
};

export default Footer;