import React from 'react';
import image from './photo_assoc.jpg';
import photo from './photo_nav.jpg';

export const Assoc = () => {
    return (
        <div>
            <img className='' src={photo} alt='img'></img>
                <section className='flex mt-32 lg:text-lg justify-between'>
                    <div className='lg:ml-6'>
                        <img className='w-full lg:h-[300px] lg:w-[1200px] ' src={image} alt='img'></img>
                    </div>
                    <div className='lg:ml-16'>
                        <h1 className='lg:text-4xl'>Bienvenue à La Méricourtoise.</h1>
                        <p>La Méricourtoise, une association dédiée à la promotion de la musculation en autonomie. Notre mission principale est d'offrir à nos membres un environnement propice à la pratique de la musculation, où ils peuvent atteindre leurs objectifs de remise en forme de manière autonome et efficace.</p>
                    </div>
                </section>
        </div>
    );
}