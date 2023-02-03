import React, { useState, useEffect } from "react";

import ExpCarte from "@components/ExpCarte";
import apiConnexion from "../services/apiConnexion";

import "./CurriculumVitae.css";

export default function CurriculumVitae() {
  const [expData, setExpData] = useState();

  useEffect(() => {
    apiConnexion
      .get(`experiences`)
      .then((res) => {
        setExpData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#21618C]">
      <h2 className="text-center text-[#3498DB] text-4xl pt-10 underline underline-offset-8 decoration-[#FFC300]">
        Curriculum Vitae
      </h2>
      <div className="flex flex-row pt-10 mx-auto">
        <div className="w-1/5 sm:w-2/5" />
        <div className=" w-3/5 sm:w-1/5">
          <div className="w-48 h-48 border-2 border-[#1C2833] rounded-full align-middle mx-auto avatar" />
          <div className="w-0 h-48 border-2 border-[#1C2833] align-middle mx-auto" />
          <div className="w-1/5 sm:w-2/5" />
        </div>
      </div>
      <div className="pb-20">
        {expData?.map((data) => (
          <ExpCarte key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
