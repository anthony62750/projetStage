import React from 'react';
import photo from '../page_accueil/photo_nav.jpg';
import image from '../page_accueil/photo_assoc.jpg';
import logo1 from '../page_accueil/Chevron1.png';
import logo2 from '../page_accueil/Chevron2.png';

export const Assoc = () => {
    return (
        <div className='min-h-screen'>
            {/* photo de la nav */}
            <img className='xxs:min-h-[97px]' src={photo} alt='img'></img>
            {/* fleche droite */}
                <div className='flex lg:justify-end md:justify-center sm:justify-center xs:justify-center lg:mr-10 lg:w-139 lg:h-127 rotate-90.03'>
                    <img className='' src={logo1} alt='img'></img>
                </div>
            {/* photo et texte */}
            <section className='xxs:flex flex-col-reverse xs:flex-col xs:flex-col-reverse xs:items-center sm:flex-col sm:flex-col-reverse sm:items-center sm:justify-center md:flex-col md:flex-col-reverse md:items-center lg:text-lg lg:flex-row lg:justify-between'>
                {/* photo */}
                <div className='lg:ml-6'>
                    <img className='w-full xxs:h-[150px] xs:h-[250px] xs:w-[300px] xs:mt-4 sm:h-[350px] sm:w-[450px] sm:mt-5 md:h-[300px] md:w-[400px] md:mt-6 lg:h-[400px] lg:w-[1300px]' src={image} alt='img'></img>
                </div>
                {/* texte */}
                <div className='xs:p-1 sm:p-2 md:p-3 lg:ml-12'>
                    <h1 className='xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:p-1'>Bienvenue à La Méricourtoise, musculation en AUTONOMIE.</h1><br></br>
                    <p>La Méricourtoise, une association dédiée à la promotion de la musculation en autonomie. Notre mission principale est d'offrir à nos membres un environnement propice à la pratique de la musculation, où ils peuvent atteindre leurs objectifs de remise en forme de manière autonome et efficace.</p>
                </div>
            </section>
            {/* fleche gauche */}
            <div className='flex justify-center lg:mr-96 lg:w-139 lg:h-127 rotate-89.91'>
                <img className='' src={logo2} alt='img'></img>
            </div>
        </div>
    );
};