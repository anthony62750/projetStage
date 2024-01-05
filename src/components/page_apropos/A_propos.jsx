import React from "react";
import photo1 from '../page_apropos/photo1.jpg';
import photo2 from '../page_apropos/photo2.jpg';

export const A_propos = () => {
    return (
        <div className="min-h-screen ">

            <section className="flex xs:flex-col xs:items-center sm:items-center sm:justify-center sm:flex-col md:flex-row lg:flex-row justify-between mt-36 pt-6 px-8 xs:text-xs sm:text-sm md:text-base lg:text-xl">
                <div className="p-7 sm:py-2 md:py-8 lg:py-20">
                    <p>Historique de La Méricourtoise : <br></br><br />
                    L'association La Méricourtoise, musculation en autonomie a ouvert ses portes en 2007, avec une vision claire de fournir à la communauté un environnement dédié à la musculation en autonomie. Depuis nos débuts, nous avons évolué pour devenir un lieu dynamique où les passionnés de fitness peuvent atteindre leurs objectifs de remise en forme de manière autonome. Notre salle est bien équipée avec une gamme variée d'appareils de musculation et de cardio, offrant ainsi à nos membres un large éventail d'options pour leur entraînement en toute liberté.</p>
                </div>

                <div>
                    <img className='xs:max-w-[200px] sm:max-w-[300px]  md:max-w-[400px] lg:max-w-[600px]' src={photo1} alt="para1"/>
                </div>
            </section>

            <section className="flex xs:flex-col xs:flex-col-reverse xs:items-center sm:flex-col-reverse sm:items-center sm:justify-center sm:flex-col md:flex-row lg:flex-row justify-between p-7 xs:text-xs sm:text-sm md:text-base lg:text-xl">
                <div>
                    <img className='xs:max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px]' src={photo2} alt="para2"/>
                </div>

                <div className="p-7 sm:py-2 lg:py-20">
                    <p>Équipements et Services : <br></br><br />
                    À La Méricourtoise, nous sommes fiers de nos installations modernes qui répondent aux besoins de chacun, du débutant à l'athlète confirmé. Nos équipements de pointe comprennent des machines de musculation, des haltères, des tapis de course et bien plus encore. Nous encourageons nos membres à exercer leur autonomie dans leur routine d'entraînement. Que vous cherchiez à améliorer votre force, à perdre du poids ou simplement à maintenir une vie active, notre salle est l'endroit idéal pour atteindre vos objectifs de fitness en toute liberté.</p>
                </div>
            </section>
            
        </div>
    );
};