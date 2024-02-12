import React from 'react';

export const Modalites = () => {
    
    return (
        <div>
            <section className='min-h-screen p-20 flex justify-between xs:text-xs xs:mt-32 xs:ml-1 sm:text-sm sm:mt-32 sm:ml-2 md:text-base md:mt-36 md:ml-4 lg:text-xl lg:ml-6'>
                <div>
                    <h1 className='xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Modalités d'inscription: </h1><br></br>
                    <p className='xs:text-xs sm:text-sm md:text-base lg:text-xl mt-3'>L'accès à nos installations est ouvert aux mineurs à partir de 16 ans, sous certaines conditions. Les mineurs de 16 ans doivent être accompagnés d'un tuteur déjà inscrit à la salle. Pour les mineurs âgés de 16 ans et demi, une autorisation parentale est requise en plus de la présence d'un parent au moment de l'inscription. Nous accordons une importance particulière à la sécurité et au bien-être de nos membres.<br></br><br />

                    Nous insistons sur l'importance d'apporter son propre matériel lors de chaque séances, notamment une serviette et une double paire de chaussures, cette dernière étant obligatoire pour garantir des conditions sanitaires optimales.<br></br><br />

                    Lors de l'inscription, il est impératif de fournir le règlement signé avec la mention "lu et approuvé". De plus, la souscription à une assurance responsabilité civile est OBLIGATOIRE. Les mineurs et les majeurs doivent également remplir un questionnaire de santé.<br></br><br />

                    Nous soulignons qu'aucune inscription ne sera acceptée si le dossier est incomplet. Ces mesures visent à assurer la sécurité, le confort et le respect des normes éthiques au sein de notre établissement. Nous sommes reconnaissants de votre compréhension et de votre coopération pour maintenir un environnement sain et accueillant pour tous nos membres.<br></br><br />
                    
                    Voici les documents obligatoires pour votre inscription : <br></br>

                    - 2 photos d'identité,<br></br>

                    - Une assurance responsabilité civile,<br></br>
                    
                    <p> - Une attestation a faire copier aux parents des mineurs de 16 ans et demi : </p>
                    <a className='text-[#0a62d0]' href={process.env.PUBLIC_URL + '/Autorisation_parentale.pdf'} target="_blank" rel="noopener noreferrer">Ouvrir le pdf</a><br></br>

                    <p> - Un questionnaire de santé pour les mineurs : </p>
                    <a className='text-[#0a62d0]' href={process.env.PUBLIC_URL + '/Questionnaire_mineur.pdf'} target="_blank" rel="noopener noreferrer">Ouvrir le pdf</a><br></br>

                    <p> - Un questionnaire de santé pour les majeurs : </p>
                    <a className='text-[#0a62d0]' href={process.env.PUBLIC_URL + '/Questionnaire_majeur.pdf'} target="_blank" rel="noopener noreferrer">Ouvrir le pdf</a><br></br>

                    <p> - Règlement signé avec la mention "lu et approuvé" : </p>
                    <a className='text-[#0a62d0]' href={process.env.PUBLIC_URL + '/Reglement_interieur.pdf'} target="_blank" rel="noopener noreferrer">Ouvrir le pdf</a><br></br>


                    </p>
                </div>
            </section>
        </div>
    );
};