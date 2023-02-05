import React, { useState, useEffect } from "react";

import apiConnexion from "../services/apiConnexion";

export default function APITableauxAdmin() {
  const [mesTableaux, setMesTableaux] = useState();

  useEffect(() => {
    apiConnexion
      .get(`tableaux`)
      .then((res) => {
        setMesTableaux(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionSuppresionTableau = (tableau) => {
    const nouveauTableauList = [...mesTableaux];
    nouveauTableauList.splice(nouveauTableauList.indexOf(tableau), 1);
    setMesTableaux(nouveauTableauList);
  };

  const supprimerTableau = (tableau) => {
    apiConnexion
      .delete(`tableaux/${tableau.id}`)
      .then(() => gestionSuppresionTableau(tableau))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Les plus grands tableaux de l'histoire
      </h2>
      <div>
        {mesTableaux?.map((tableau) => {
          return (
            <div className="pb-20">
              <h2 className="text-center text-4xl font-bold text-[#FFC300] pt-20 mb-20">
                {tableau.titre}
                <button
              className="ml-8 font-bold text-xl text-red-900"
              type="button"
              onClick={() => supprimerTableau(tableau)}
            >
              X
            </button>
              </h2>
              <div className="flex flex-row border-b-4 border-[#FFC300] pb-20 w-[80%] mx-auto">
                <div className="w-1/2">
                  <img
                    src={tableau.url_image}
                    alt={tableau.titre}
                    className="min-w-400px max-h-[600px] mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="w-[80%] mx-auto mb-2 text-[#3498DB] font-bold">
                    Mouvement artistique : {tableau.style}
                  </h3>
                  <h3 className="w-[80%] mx-auto mb-2 text-[#3498DB] font-bold">
                    Type de peinture : {tableau.type}
                  </h3>
                  <h3 className="w-[80%] mx-auto mb-2 text-[#1C2833] font-bold">
                    {tableau.auteur}
                  </h3>
                  <h3 className="w-[80%] mx-auto mb-2 text-[#FFC300]">
                    {tableau.date ? tableau.date : "Date inconnue"}
                  </h3>
                  <p className="w-[80%] mx-auto text-[#3498DB] font-bold">
                    {tableau.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
