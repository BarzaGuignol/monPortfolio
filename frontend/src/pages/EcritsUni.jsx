import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

export default function EcritsUni() {
  const [monLivre, setMonLivre] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`livres/${id}`)
      .then((res) => {
        setMonLivre(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionModifAuChangement = (place, value) => {
    const nouveauLivre = { ...monLivre };
    nouveauLivre[place] = value;
    setMonLivre(nouveauLivre);
  };

  const gestionModificationLivre = (e) => {
    e.preventDefault();
    const { titreLivre, imageLivre, url_boutique } = monLivre;

    apiConnexion
      .put(`livres/${monLivre.id}`, {
        titreLivre,
        imageLivre,
        url_boutique,
      })
      .then((res)=> {
        setTimeout(() => navigate("/bundle/passion"), 1500);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-[#21618C]">
      <div className="py-20">
        <div className="flex flex-row border-b-4 border-[#FFC300] pb-20 w-[80%] mx-auto">
          <div className="w-1/2">
            <img
              src={monLivre.imageLivre}
              alt={monLivre.titreLivre}
              className="min-w-400px max-h-[600px] mx-auto"
            />
          </div>
          <div className="w-1/2 text-center">
            <h2 className="text-4xl font-bold text-[#FFC300] pt-20 mb-20">
              {monLivre.titreLivre}
            </h2>
            <a
            href={monLivre.url_boutique}
            target="_blank"
            className="bg-transparent text-[#FFC300] font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            rel="noreferrer"
          >
            Lien Boutique
          </a>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-20 mx-auto">
        <form
        className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-8"
        onSubmit={(e) => gestionModificationLivre(e)}
        >
        <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Titre de l'oeuvre :
          </label>
          <input
            type="text"
            name="titreLivre"
            placeholder="Titre"
            required="required"
            defaultValue={monLivre.titreLivre}
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
            name="imageLivre"
            placeholder="Url image"
            required="required"
            defaultValue={monLivre.imageLivre}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien de la boutique (optionnel) :
          </label>
          <input
            type="text"
            name="url_boutique"
            placeholder="Url boutique"
            defaultValue={monLivre.url_boutique}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
        
        <div className="flex flex-row space-x-2">
          <Link to="/bundle/passion"
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
  )
}