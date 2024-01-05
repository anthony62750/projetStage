import React, { useState } from "react";

export const Formulaire = () => {
  // State pour gérer l'état de l'abonnement à la newsletter
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  // Fonction appelée lorsqu'il y a un changement dans la case à cocher de la newsletter
  const handleNewsletterChange = () => {
    // Inversion de l'état actuel
    setSubscribeNewsletter(!subscribeNewsletter);
  };

  return (
    <div className="flex flex-col min-h-screen mt-32 drop-shadow-xl">
      <main className="flex-grow flex items-center justify-center">
        <form className="md:h-[32rem] md:w-[28rem] flex flex-col rounded border border-[#2b2728] items-center p-8 sm:w-[20rem]" action="/votre-point-de-terminaison" method="post"> 
        {/* ou "get" en fonction de votre besoin */}
        
          <label className="flex flex-col items-center justify-center">Prénom :
            <input className="rounded mt-4 w-80 h-10 text-center border border-[#2b2728]" type="text" name="firstName"/>
          </label>
          <br />

          <label className="text-base flex flex-col items-center justify-center">Nom :
            <input className="rounded mt-4 w-80 h-10 text-center border border-[#2b2728]" type="text" name="lastName"/>
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Adresse email :
            <input className="rounded mt-4 w-80 h-10 text-center border border-[#2b2728]" type="email" name="email"/>
          </label>
          <br />

          <label className="flex items-center justify-center">
            <input type="checkbox" name="subscribeNewsletter" checked={subscribeNewsletter} onChange={handleNewsletterChange} className="mr-2"/>
            Cochez la case si vous souaitez vous abonner à la newsletter
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Message :
            <textarea className="rounded mt-4 w-80 h-24 text-center border border-[#2b2728]" name="message"/>
          </label>
          <br />

          <button className="items-center rounded mt-6 h-10 w-32 border text-[#2b2728] bg-[#0a62d0]" type="submit">Envoyer</button>

        </form>
      </main>
    </div>
  );
};

