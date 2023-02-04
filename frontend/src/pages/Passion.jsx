import React, { useState, useEffect } from "react";

import LivreCarte from "@components/LivreCarte";
import apiConnexion from "../services/apiConnexion";
import TableauCarte from "@components/TableauCarte";

export default function Passion() {
  const [mesLivres, setMesLivres] = useState();

  useEffect(() => {
    apiConnexion
      .get(`livres`)
      .then((res) => {
        setMesLivres(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">Mes écrits</h2>
      <div className="flex flex-col sm:flex sm:flex-row sm:space-x-20 w-4/5 mx-auto text-center justify-center mt-20 pb-20">
        {mesLivres?.map((data) => (
            <LivreCarte key={data.id} data={data} />
          ))}
      </div>
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">Sélection des plus grands tableaux de l'histoire</h2>
      <div >
        <TableauCarte />
      </div>
    </div>
  );
}
