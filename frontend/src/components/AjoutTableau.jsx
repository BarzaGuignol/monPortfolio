/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";

import apiConnexion from "../services/apiConnexion";

export default function AjoutTableau() {
  const [mesTableaux, setMesTableaux] = useState({
    titre: "",
    style: "",
    type: "",
    auteur: "",
    description: "",
    date: "",
    urlImage: "",
  });

  const gestionAjoutAuChangement2 = (place, value) => {
    const nouveauMesTableaux = { ...mesTableaux };
    nouveauMesTableaux[place] = value;
    setMesTableaux(nouveauMesTableaux);
  };

  const gestionAjoutTableau = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`tableaux`, {
        ...mesTableaux,
      })
      .then((tableaux) => {
        setMesTableaux(tableaux.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form
        className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-20"
        onSubmit={(e) => gestionAjoutTableau(e)}
      >
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Titre :
        </label>
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          required="required"
          value={mesTableaux.titre}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Mouvement artistique :
        </label>
        <input
          type="text"
          name="style"
          placeholder="Style de l'oeuvre"
          required="required"
          value={mesTableaux.style}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Type de peinture :
        </label>
        <input
          type="text"
          name="type"
          placeholder="Peinture à l'huile"
          required="required"
          value={mesTableaux.type}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Auteur :
        </label>
        <input
          type="text"
          name="auteur"
          placeholder="Prénom et nom de l'auteur"
          required="required"
          value={mesTableaux.auteur}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
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
          value={mesTableaux.description}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Date de l'oeuvre :
        </label>
        <input
          type="number"
          name="date"
          placeholder="Date"
          required="required"
          value={mesTableaux.date}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
          Lien de l'image :
        </label>
        <input
          type="text"
          name="urlImage"
          placeholder="Url image"
          required="required"
          value={mesTableaux.urlImage}
          onChange={(e) =>
            gestionAjoutAuChangement2(e.target.name, e.target.value)
          }
          className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
        />
        <button
          type="submit"
          className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
        >
          Ajouter nouveau tableau
        </button>
      </form>
    </div>
  );
}
