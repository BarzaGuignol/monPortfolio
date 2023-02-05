import React, { useState, useEffect } from "react";

import ProjetCarteAdmin from "@components/ProjetCarteAdmin";
import apiConnexion from "../services/apiConnexion";

export default function ProjetsAdmin() {
  const [mesProjets, setMesProjets] = useState();

  useEffect(() => {
    apiConnexion
      .get(`projets`)
      .then((res) => {
        setMesProjets(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gestionSuppresionProjet = (projet) => {
    const nouveauProjetList = [...mesProjets];
    nouveauProjetList.splice(nouveauProjetList.indexOf(projet), 1);
    setMesProjets(nouveauProjetList);
  };

  const supprimerProjet = (projet) => {
    apiConnexion
      .delete(`projets/${projet.id}`)
      .then(() => gestionSuppresionProjet(projet))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Mes projets
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-y-20 w-4/5 mx-auto text-center justify-center mt-20 pb-20">
        {mesProjets?.map((data) => (
          <ProjetCarteAdmin
            key={data.id}
            data={data}
            supprimerProjet={supprimerProjet}
          />
        ))}
      </div>
    </div>
  );
}
