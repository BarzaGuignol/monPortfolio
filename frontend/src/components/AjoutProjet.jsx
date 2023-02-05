/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import apiConnexion from "../services/apiConnexion";

export default function AjoutProjet() {
  const [projet, setProjet] = useState({
    titre: "",
    urlImage: "",
    description: "",
    urlGithub: "",
    urlSite: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  const gestionAjoutAuChangement1 = (place, value) => {
    const nouveauProjet = { ...projet };
    nouveauProjet[place] = value;
    setProjet(nouveauProjet);
  };

  const gestionAjoutProjet = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`projets`, {
        ...projet,
      })
      .then((projets) => {
        notify("Nouveau projet ajouté");
        setProjet(projets.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="border-x-4 border-[#FFC300]">
        <form className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-20" onSubmit={(e) => gestionAjoutProjet(e)}>
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Titre :
          </label>
          <input
            type="text"
            name="titre"
            placeholder="Titre"
            required="required"
            value={projet.titre}
            onChange={(e) =>
              gestionAjoutAuChangement1(e.target.name, e.target.value)
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
            value={projet.urlImage}
            onChange={(e) =>
              gestionAjoutAuChangement1(e.target.name, e.target.value)
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
            value={projet.description}
            onChange={(e) =>
              gestionAjoutAuChangement1(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien Github :
          </label>
          <input
            type="text"
            name="urlGithub"
            placeholder="url Github"
            required="required"
            value={projet.urlGithub}
            onChange={(e) =>
              gestionAjoutAuChangement1(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Lien Site :
          </label>
          <input
            type="text"
            name="urlSite"
            placeholder="url Site"
            value={projet.urlSite}
            onChange={(e) =>
              gestionAjoutAuChangement1(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <button
            type="submit"
            className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
          >
            Ajouter nouveau projet
          </button>
        </form>
      </div>
    </>
  );
}
