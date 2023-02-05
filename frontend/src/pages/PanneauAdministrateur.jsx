import React from "react";
import { Link } from "react-router-dom";

import AjoutExp from "@components/AjoutExp";
import AjoutProjet from "@components/AjoutProjet";
import AjoutTableau from "@components/AjoutTableau";

export default function PanneauAdministrateur() {
  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Panneau Administrateur
      </h2>
      <div className="flex flex-row mt-20 text-center justify-center space-x-8">
        <h2 className="text-2xl text-[#1C2833]">Modifier / Supprimer : </h2>
        <Link to="" className="text-2xl text-[#3498DB] hover:text-[#FFC300]">CV</Link>
        <Link to="" className="text-2xl text-[#3498DB] hover:text-[#FFC300]">Projets</Link>
        <Link to="" className="text-2xl text-[#3498DB] hover:text-[#FFC300]">Ecrits</Link>
        <Link to="" className="text-2xl text-[#3498DB] hover:text-[#FFC300]">Tableaux</Link>
      </div>
      <div className="flex flex-row pb-20">
        <div className="w-1/3 boder-r-4 border-[#FFC300]">
          <AjoutExp />
        </div>
        <div className="w-1/3">
          <AjoutProjet />
        </div>
        <div className="w-1/3">
          <AjoutTableau />
        </div>
      </div>
    </div>
  );
}
