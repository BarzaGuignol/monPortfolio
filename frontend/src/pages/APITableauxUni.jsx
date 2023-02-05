/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

export default function APITableauxUni() {
  const [monTableau, setMonTableau] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`tableaux/${id}`)
      .then((res) => {
        setMonTableau(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionModifAuChangement = (place, value) => {
    const nouveauTableau = { ...monTableau };
    nouveauTableau[place] = value;
    setMonTableau(nouveauTableau);
  };

  const gestionModificationTableau = (e) => {
    e.preventDefault();
    const { auteur, date, description, style, titre, type, url_image } =
      monTableau;

    apiConnexion
      .put(`tableaux/${monTableau.id}`, {
        auteur,
        date,
        description,
        style,
        titre,
        type,
        url_image,
      })
      .then(() => {
        setTimeout(() => navigate("/bundle/tableaux"), 1500);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-[#21618C]">
      <div className="pb-20">
        <h2 className="text-center text-4xl font-bold text-[#FFC300] pt-20 mb-20">
          {monTableau.titre}
        </h2>
        <div className="flex flex-row border-b-4 border-[#FFC300] pb-20 w-[80%] mx-auto">
          <div className="w-1/2">
            <img
              src={monTableau.url_image}
              alt={monTableau.titre}
              className="min-w-400px max-h-[600px] mx-auto"
            />
          </div>
          <div className="w-1/2">
            <h3 className="w-[80%] mx-auto mb-2 text-[#3498DB] font-bold">
              Mouvement artistique : {monTableau.style}
            </h3>
            <h3 className="w-[80%] mx-auto mb-2 text-[#3498DB] font-bold">
              Type de peinture : {monTableau.type}
            </h3>
            <h3 className="w-[80%] mx-auto mb-2 text-[#1C2833] font-bold">
              {monTableau.auteur}
            </h3>
            <h3 className="w-[80%] mx-auto mb-2 text-[#FFC300]">
              {monTableau.date ? monTableau.date : "Date inconnue"}
            </h3>
            <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
              {monTableau.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-20 mx-auto">
        <form
          className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-20"
          onSubmit={(e) => gestionModificationTableau(e)}
        >
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Titre :
          </label>
          <input
            type="text"
            name="titre"
            placeholder="Titre"
            required="required"
            defaultValue={monTableau.titre}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
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
            defaultValue={monTableau.style}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
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
            defaultValue={monTableau.type}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
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
            defaultValue={monTableau.auteur}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Description :
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={monTableau.description}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
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
            defaultValue={monTableau.date}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien de l'image :
          </label>
          <input
            type="text"
            name="url_image"
            placeholder="Url image"
            required="required"
            defaultValue={monTableau.url_image}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <div className="flex flex-row space-x-2">
            <Link
              to="/bundle/tableaux"
              type="submit"
              className="w-1/2 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            >
              Annuler modification
            </Link>
            <button
              type="submit"
              className="w-1/2 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            >
              Valider modification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
