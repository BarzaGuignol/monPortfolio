import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

export default function CurriculumVitaeUni() {
  const [monCV, setMonCV] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`experiences/${id}`)
      .then((res) => {
        setMonCV(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionModifAuChangement = (place, value) => {
    const nouveauCV = { ...monCV };
    nouveauCV[place] = value;
    setMonCV(nouveauCV);
  };

  const gestionModificationCV = (e) => {
    e.preventDefault();
    const { titre, dateDebut, dateFin, description, url_image, impairOuPair, competences_id } = monCV;

    apiConnexion
      .put(`experiences/${monCV.id}`, {
        titre,
        dateDebut,
        dateFin,
        description,
        url_image,
        impairOuPair,
        competences_id,
      })
      .then((res) => {
        setTimeout(() => navigate("/bundle/curriculumvitae"), 1500);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen bg-[#21618C]">
      <div className="py-20">
        <div className="flex flex-row border-b-4 border-[#FFC300] pb-20 w-[80%] mx-auto">
          <div className="w-1/2">
            <img
              src={monCV.url_image}
              alt={monCV.titre}
              className="min-w-400px max-h-[600px] mx-auto"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#FFC300] mb-10 w-[80%] mx-auto">
              {monCV.titre}
            </h2>
            <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
              {monCV.description}
            </p>
            <p className="w-[80%] text-2xl mx-auto text-[#FFC300] font-bold my-8">
              {monCV.dateDebut ? monCV.dateDebut - monCV.dateFin : monCV.dateFin}
            </p>
            <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
              Impair ou Pair : {monCV.impairOuPair}
            </p>
            <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
              Compétences jointes : {monCV.competences_id}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-20 mx-auto">
        <form
          className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:mt-8"
          onSubmit={(e) => gestionModificationCV(e)}
        >
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Titre :
          </label>
          <input
            type="text"
            name="titre"
            placeholder="Titre"
            required="required"
            defaultValue={monCV.titre}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            date début :
          </label>
          <input
            type="number"
            name="dateDebut"
            placeholder="Date début"
            defaultValue={monCV.dateDebut}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            date fin :
          </label>
          <input
            type="number"
            name="dateFin"
            placeholder="Date fin"
            required="required"
            defaultValue={monCV.dateFin}
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
            required="required"
            defaultValue={monCV.description}
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
            defaultValue={monCV.url_image}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Impair ou pair (1 ou 2) :
          </label>
          <input
            type="number"
            name="impairOuPair"
            placeholder="impair ou pair"
            defaultValue={monCV.impairOuPair}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Compétences associées :
          </label>
          <input
            type="number"
            name="competences_id"
            placeholder="Compétences associées"
            defaultValue={monCV.competences_id}
            onChange={(e) =>
              gestionModifAuChangement(e.target.name, e.target.value)
            }
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />
          <div className="flex flex-row space-x-2">
          <Link to="/bundle/curriculumvitae"
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