import React from "react";

import './CurriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">Curriculum Vitae</h2>
      <div className="flex flex-row pt-10 mx-auto">
        <div className="w-2/5">
          <img className="w-96 mx-auto mt-72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf/page1-1200px-2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf.jpg" alt="diplôme du bac" />
        </div>
        <div className="w-1/5">
          <div className="w-48 h-48 border-2 border-[#1C2833] rounded-full align-middle mx-auto avatar" />
          <div className="w-0 h-48 border-2 border-[#1C2833] align-middle mx-auto" />
          <div className="w-20 h-20 border-2 border-[#1C2833] rounded-full align-middle mx-auto">
            <p className="text-center text-2xl font-bold text-[#FFC300] mt-5">2015</p>
          </div>
        </div>
        <div className="w-2/5">
          <p>Baccalauréat filière Scientifique option Science de l'ingénieur spécialité physique-chimie</p>
        </div>
      </div>

    </div>
  );
}
