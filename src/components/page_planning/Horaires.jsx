import React from 'react';
import image from '../page_planning/image_horaires.jpg';

export const Horaires = () => {
    return (
        <section className='bg-cover h-screen flex bg-no-repeat' style={{ backgroundImage: `url(${image})` }}>
            <div className='xs:mx-auto sm:mx-auto md:mx-auto lg:mx-auto max-w-xl h-fit mt-40 drop-shadow-2xl bg-[#E0E5E9]'>
                <div className='overflow-x-auto'>
                <table className='min-w-full border-collapse border-gray-300 xs:text-xs sm:text-sm md:text-base lg:text-xl'>
                    <thead>
                        <tr className='text-[#0a62d0] font-bold'>
                            <th className='border border-gray-300 p-2'>Jour</th>
                            <th className='border border-gray-300 p-2'>Horaires MATIN</th>
                            <th className='border border-gray-300 p-2'>Horaires APRES-MIDI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Lundi</td>
                            <td className='border border-gray-300 p-2'></td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Mardi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Mercredi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Jeudi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Vendredi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Samedi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'></td>
                        </tr>
                        <tr className='text-[#0a62d0] font-bold'>
                            <td className='border border-gray-300 p-2'>Dimanche</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
}