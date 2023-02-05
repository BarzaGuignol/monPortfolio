/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";

import apiConnexion from "../services/apiConnexion";

export default function AjoutExp() {
  const [experience, setExperience] = useState({
    titre: "",
    dateDebut: 0,
    dateFin: "",
    description: "",
    urlImage: "",
    impairOuPair: 1,
    competencesId: 1,
  });

  const gestionAjoutAuChangement = (place, value) => {
    const nouvelleExp = { ...experience };
    nouvelleExp[place] = value;
    setExperience(nouvelleExp);
  };

  const gestionAjoutExp = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`experiences`, {
        ...experience,
      })
      .then((experiences) => {
        setExperience(experiences.data);
      })
      .catch((err) => console.error(err));
  };

  const gestionImpairOuPair = (bool) => {
    const nouvelleExp = { ...experience };
    nouvelleExp.impairOuPair = bool;
    setExperience(nouvelleExp);
  };

  return (
    <div className="bg-[#21618C]">
      <form
        className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:pt-20"
        onSubmit={(e) => gestionAjoutExp(e)}
      >
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Titre :
        </label>
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          required="required"
          value={experience.titre}
          onChange={(e) =>
            gestionAjoutAuChangement(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Date de début (optionnel) :
        </label>
        <input
          type="number"
          name="dateDebut"
          placeholder="Date début"
          value={experience.dateDebut}
          onChange={(e) =>
            gestionAjoutAuChangement(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Date de fin :
        </label>
        <input
          type="number"
          name="dateFin"
          placeholder="Date fin"
          required="required"
          value={experience.dateFin}
          onChange={(e) =>
            gestionAjoutAuChangement(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Description :
        </label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          required="required"
          value={experience.description}
          onChange={(e) =>
            gestionAjoutAuChangement(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Lien de l'image :
        </label>
        <input
          type="text"
          name="urlImage"
          placeholder="url image"
          required="required"
          value={experience.urlImage}
          onChange={(e) =>
            gestionAjoutAuChangement(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        {experience.impairOuPair === 1 && (
          <button
            type="button"
            className="w-[60%] mx-auto mb-8 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            onClick={() => gestionImpairOuPair(2)}
          >
            Pair
          </button>
        )}
        {experience.impairOuPair === 2 && (
          <button
            type="button"
            className="w-[60%] mx-auto mb-8 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            onClick={() => gestionImpairOuPair(1)}
          >
            Impair
          </button>
        )}
        <button
          type="submit"
          className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
        >
          Ajouter nouvelle expérience
        </button>
      </form>
    </div>
  );
}
