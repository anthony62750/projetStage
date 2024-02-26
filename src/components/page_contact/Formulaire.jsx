import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Formulaire = () => {
  const [errors, setErrors] = useState({});

  // Réinitialiser les erreurs lorsqu'un champ change
  const handleInputChange = (event) => {
    setErrors({});
  };

  // Fonction pour réinitialiser le formulaire
  const resetForm = () => {
    document.getElementById("contactForm").reset();
  };

  // Empêche le comportement par défaut du formulaire pour éviter le rechargement de la page
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Expressions régulières pour la validation
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/; // Valide le nom et le prénom (lettres et caractères accentués)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valide une adresse e-mail

    // Initialise un objet pour stocker les nouvelles erreurs
    const newErrors = {};

    // Validation du prénom
    if (!nameRegex.test(firstName)) {
      newErrors.firstName = "Veuillez remplir ce champ uniquement des lettres.";
    }

    // Validation du nom
    if (!nameRegex.test(lastName)) {
      newErrors.lastName = "Veuillez remplir ce champ uniquement des lettres.";
    }

    // Validation de l'adresse e-mail
    if (!emailRegex.test(email)) {
      newErrors.email = "Veuillez entrer une adresse mail valide.";
    }

    // Validation du message
    if (!message.trim()) {
      newErrors.message = "Veuillez écrire votre message.";
    }

    // Stocke les nouvelles erreurs dans l'état local
    setErrors(newErrors);

    // Si des erreurs sont présentes, ne pas envoyer la requête
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Envoie les données du formulaire à EmailJS
    try {
      const templateParams = {
        firstName,
        lastName,
        email,
        message,
      };

      // Utilisation du service EmailJS
      await emailjs.send(
        "service_jucc1tf", // Remplacez par votre ID de service EmailJS
        "template_hl4nkdp", // Remplacez par votre ID de template EmailJS
        templateParams,
        "8ZMv5_XTn9TKIsLa4" // Remplacez par votre ID utilisateur EmailJS
      );

      alert("Formulaire envoyé avec succès !");
      resetForm(); // Réinitialise le formulaire
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

 return (
    <div className="flex flex-col min-h-screen mt-16">
      
      <div className="flex justify-center xxs:mt-24 xs:text-base xs:mt-32 xs:ml-1 sm:text-base sm:ml-2 md:text-base md:ml-4 lg:text-xl lg:ml-6">
        <p>Pour toute information supplémentaire ou pour nous contacter, veuillez remplir le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais. Merci !</p>
      </div>

      <main className="flex-grow flex items-center justify-center">

        <form id="contactForm" onSubmit={handleFormSubmit} className=" xxs:w-[17rem] sm:w-[24rem] md:w-[28rem] flex flex-col rounded border border-[#2b2728] items-center p-8  " method="post">

          <label className="flex flex-col items-center justify-center">Prénom :
            <input className={`rounded mt-4 w-80 h-10 text-center border xxs:w-[15rem] sm:w-[22rem] ${errors.firstName ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="text" name="firstName" placeholder="Entrez votre prénom" onChange={handleInputChange}/>{errors.firstName && <span className="text-[#FF0000] mt-2 text-xs">{errors.firstName}</span>}
          </label>
          <br />

          <label className="text-base flex flex-col items-center justify-center">Nom :
            <input className={`rounded mt-4 w-80 h-10 text-center border xxs:w-[15rem] sm:w-[22rem] ${errors.lastName ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="text" name="lastName" placeholder="Entrez votre Nom" onChange={handleInputChange}/>{errors.lastName && <span className="text-[#FF0000] mt-2 text-xs">{errors.lastName}</span>}
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Adresse mail :
            <input className={`rounded mt-4 w-80 h-10 text-center border xxs:w-[15rem] sm:w-[22rem] ${errors.email ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} type="email" name="email" placeholder="Entrez votre adresse mail" onChange={handleInputChange}/>{errors.email && <span className="text-[#FF0000] mt-2 text-xs">{errors.email}</span>}
          </label>
          <br />

          <label className="flex flex-col items-center justify-center">Message : 
            <textarea className={`rounded mt-4 w-80 h-24 rows=15 resize-none text-center border xxs:w-[15rem] sm:w-[22rem] ${errors.message ? 'text-[#FF0000]' : 'border-[#2b2728]'} focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`} name="message" placeholder="Entrez votre message"onChange={handleInputChange}/>{errors.message && <span className="text-[#FF0000] mt-2 text-xs">{errors.message}</span>}
          </label>
          <br />

          <button className="items-center rounded mt-6 h-10 w-32 border text-[#000000] bg-[#0a62d0]" type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
};
