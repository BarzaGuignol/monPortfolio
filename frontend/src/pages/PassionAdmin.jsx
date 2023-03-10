/* eslint-disable react/jsx-no-bind */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TableauCarte from "@components/TableauCarte";
import LivreCarteAdmin from "@components/LivreCarteAdmin";
import apiConnexion from "../services/apiConnexion";

export default function PassionAdmin() {
  const [mesLivres, setMesLivres] = useState();

  useEffect(() => {
    apiConnexion
      .get(`livres`)
      .then((res) => {
        setMesLivres(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionSuppresionLivre = (livre) => {
    const nouveauLivreList = [...mesLivres];
    nouveauLivreList.splice(nouveauLivreList.indexOf(livre), 1);
    setMesLivres(nouveauLivreList);
  };

  const supprimerLivre = (livre) => {
    apiConnexion
      .delete(`livres/${livre.id}`)
      .then(() => gestionSuppresionLivre(livre))
      .catch((err) => console.error(err));
  };

  function retourHaut() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Mes écrits
      </h2>
      <div className="flex flex-col sm:flex sm:flex-row w-[80%] mx-auto mt-20 pb-20">
        {mesLivres?.map((data) => (
          <LivreCarteAdmin
            key={data.id}
            data={data}
            supprimerLivre={supprimerLivre}
          />
        ))}
      </div>
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Sélection des plus grands tableaux de l'histoire
      </h2>
      <div className="pb-20">
        <TableauCarte />
        <div className="flex justify-center">
          <Link
            to="/bundle/tableaux"
            className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] w-1/3 mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            onClick={retourHaut}
          >
            En voir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
