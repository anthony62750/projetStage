import React from 'react';
import photo from '../page_accueil/photo_nav.jpg';
import image from '../page_accueil/photo_assoc.jpg';
import logo1 from '../page_accueil/Chevron1.png';
import logo2 from '../page_accueil/Chevron2.png';

export const Assoc = () => {
    return (
        <div>
            {/* photo de la nav */}
            <img className='' src={photo} alt='img'></img>
            {/* fleche droite */}
                <div className='flex justify-end lg:mr-10 lg:w-139 lg:h-127 rotate-90.03'>
                    <img className='' src={logo1} alt='img'></img>
                </div>
            {/* photo et texte */}
            <section className='flex lg:text-lg justify-between'>
                {/* photo */}
                <div className='lg:ml-6'>
                    <img className='w-full lg:h-[300px] lg:w-[1200px]' src={image} alt='img'></img>
                </div>
                {/* texte */}
                <div className='lg:ml-16'>
                    <h1 className='lg:text-4xl'>Bienvenue à La Méricourtoise.</h1><br></br>
                    <p>La Méricourtoise, une association dédiée à la promotion de la musculation en autonomie. Notre mission principale est d'offrir à nos membres un environnement propice à la pratique de la musculation, où ils peuvent atteindre leurs objectifs de remise en forme de manière autonome et efficace.</p>
                </div>
            </section>
            {/* fleche gauche */}
            <div className='flex justify-center lg:mr-96 lg:w-139 lg:h-127 rotate-89.91'>
                <img className='' src={logo2} alt='img'></img>
            </div>
        </div>
    );
}