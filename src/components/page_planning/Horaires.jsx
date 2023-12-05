import React from 'react';
import image from '../page_planning/image_horaires.jpg';

export const Horaires = () => {
    return (
        <section className='bg-cover bg-center h-screen flex' style={{ backgroundImage: `url(${image})` }}>
            <div className='p-8 w-full max-w-2xl mx-auto h-4/6 mt-40 drop-shadow-xl bg-[#E0E5E9]'>
                <h1 className='text-3xl font-bold mb-4'>Horaires</h1>
                <div className='overflow-x-auto'>
                <table className='min-w-full border-collapse border border-gray-300'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 p-2'>Jour</th>
                            <th className='border border-gray-300 p-2'>Horaires MATIN</th>
                            <th className='border border-gray-300 p-2'>Horaires APRES-MIDI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-300 p-2'>Lundi</td>
                            <td className='border border-gray-300 p-2'></td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 p-2'>Mardi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 p-2'>Mercredi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 p-2'>Jeudi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 p-2'>Vendredi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'>18H30 - 21H15</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 p-2'>Samedi</td>
                            <td className='border border-gray-300 p-2'>9H00 - 11H45</td>
                            <td className='border border-gray-300 p-2'></td>
                        </tr>
                        <tr>
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