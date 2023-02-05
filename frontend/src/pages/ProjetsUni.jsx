/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

export default function ProjetsUni() {
  const [monProjet, setMonProjet] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`projets/${id}`)
      .then((res) => {
        setMonProjet(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionModifAuChangement = (place, value) => {
    const nouveauProjet = { ...monProjet };
    nouveauProjet[place] = value;
    setMonProjet(nouveauProjet);
  };

  const gestionModificationProjet = (e) => {
    e.preventDefault();
    const { titre, url_image, description, url_github, url_site } = monProjet;

    apiConnexion
      .put(`projets/${monProjet.id}`, {
        titre,
        url_image,
        description,
        url_github,
        url_site,
      })
      .then(() => {
        setTimeout(() => navigate("/bundle/projets"), 1500);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen bg-[#21618C]">
      <div className="py-20">
        <div className="flex flex-row border-b-4 border-[#FFC300] pb-20 w-[80%] mx-auto">
          <div className="w-1/2">
            <img
              src={monProjet.url_image}
              alt={monProjet.titre}
              className="min-w-400px max-h-[600px] mx-auto"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#FFC300] pt-20 mb-20 w-[80%] mx-auto">
              {monProjet.titre}
            </h2>
            <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
              {monProjet.description}
            </p>
            <div className="flex flex-row text-center w-[80%] mx-auto space-x-4">
              <a
                href={monProjet.url_github}
                target="_blank"
                className="bg-transparent text-[#FFC300] font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
                rel="noreferrer"
              >
                Lien Repo
              </a>
              <a
                href={monProjet.url_site}
                target="_blank"
                className="bg-transparent text-[#FFC300] font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
                rel="noreferrer"
              >
                Lien Site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-20 mx-auto">
        <form
          className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-8"
          onSubmit={(e) => gestionModificationProjet(e)}
        >
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Titre du projet :
          </label>
          <input
            type="text"
            name="titre"
            placeholder="Titre"
            required="required"
            defaultValue={monProjet.titre}
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
            defaultValue={monProjet.url_image}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien de la boutique (optionnel) :
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={monProjet.description}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien du repo :
          </label>
          <input
            type="text"
            name="url_github"
            placeholder="Url Github"
            required="required"
            defaultValue={monProjet.url_github}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien du site (optionnel) :
          </label>
          <input
            type="text"
            name="url_site"
            placeholder="Url Site"
            required="required"
            defaultValue={monProjet.url_site}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <div className="flex flex-row space-x-2">
            <Link
              to="/bundle/passion"
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
