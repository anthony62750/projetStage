import React from 'react';
import image from '../page_inscription/image_dossiers.jpg';

export const Modalites = () => {
    return (
        <section className='flex justify-between'>
            <div className='lg:ml-6 lg:mt-44 drop-shadow-2xl'>
                <img className='lg:w-68' src={image} alt='img'></img>
            </div>
            
        </section>
    );
}