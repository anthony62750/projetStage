import React, { useState } from "react";
import axios from "axios";

export const Formulaire = () => {
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (event) => {
    // Réinitialiser les erreurs lorsqu'un champ change
    setErrors({});
  };

  const handleNewsletterChange = () => {
    setSubscribeNewsletter(!subscribeNewsletter);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {};

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      newErrors.name = "Le nom et le prénom doivent contenir uniquement des lettres.";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    // Mettre à jour les erreurs
    setErrors(newErrors);

    // Si des erreurs sont présentes, ne pas envoyer la requête
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("URL_DE_VOTRE_API_STRAPI", {
        firstName,
        lastName,
        email,
        message,
        subscribeNewsletter,
      });

      if (response.status === 200) {
        alert("Formulaire soumis avec succès !");
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête à l'API Strapi :", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-32">
      <main className="flex-grow flex items-center justify-center">
        <form onSubmit={handleFormSubmit} className="md:h-[32rem] md:w-[28rem] flex flex-col rounded border border-[#2b2728] items-center p-8 sm:w-[20rem]" action="/votre-point-de-terminaison" method="post">
          <label className="flex flex-col items-center justify-center">Prénom :
            <input className={`rounded mt-4 w-80 h-10 text-center border ${errors.name ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="text" name="firstName" placeholder="Entrez votre prénom" onChange={handleInputChange}/>{errors.name && <span className="text-[#FF0000] mt-2 text-xs">{errors.name}</span>}
          </label>
          <br />

          <label className="text-base flex flex-col items-center justify-center">Nom :
            <input className={`rounded mt-4 w-80 h-10 text-center border ${errors.name ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="text" name="lastName" placeholder="Entrez votre Nom" onChange={handleInputChange}/>{errors.name && <span className="text-[#FF0000] mt-2 text-xs">{errors.name}</span>}
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Adresse email :
            <input className={`rounded mt-4 w-80 h-10 text-center border ${errors.email ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="email" name="email" placeholder="Entrez votre adresse mail" onChange={handleInputChange}/>{errors.email && <span className="text-[#FF0000] mt-2 text-xs">{errors.email}</span>}
          </label>
          <br />

          <label className="flex items-center justify-center">
            <input type="checkbox" name="subscribeNewsletter" checked={subscribeNewsletter} onChange={handleNewsletterChange} className="mr-2"/>Cochez la case si vous souhaitez vous abonner à la newsletter
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Message : 
            <textarea className="rounded mt-4 w-80 h-24 rows=15 resize-none text-center border border-[#2b2728]" name="message" placeholder="Entrez votre message"/>
          </label>
          <br />

          <button className="items-center rounded mt-6 h-10 w-32 border text-[#000000] bg-[#0a62d0]" type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
};

