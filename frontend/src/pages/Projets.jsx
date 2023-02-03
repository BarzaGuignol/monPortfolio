import React, { useState, useEffect } from "react";

import ProjetCarte from "@components/ProjetCarte";
import apiConnexion from "../services/apiConnexion";

export default function Projets() {

  const [mesProjets, setMesProjets] = useState();

  useEffect(() => {
    apiConnexion
      .get(`projets`)
      .then((res) => {
        setMesProjets(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">Mes projets</h2>
      <div className="grid grid-cols-3 gap-y-20 w-4/5 mx-auto text-center justify-center mt-20">
      {mesProjets?.map((data) => (
          <ProjetCarte key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
