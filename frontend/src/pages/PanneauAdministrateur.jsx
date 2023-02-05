import AjoutExp from "@components/AjoutExp";
import AjoutProjet from "@components/AjoutProjet";
import React from "react";

export default function PanneauAdministrateur() {
  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Panneau Administrateur
      </h2>
      <div className="flex flex-row">
        <div className="w-1/3 boder-r-4 border-[#FFC300]">
          <AjoutExp />
        </div>
        <div className="w-1/3">
          <AjoutProjet />
        </div>
        <div className="w-1/3" />
      </div>
    </div>
  );
}
