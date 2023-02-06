/* eslint-disable react/prop-types */

import React from "react";
import { Link } from "react-router-dom";

export default function LivreCarteAdmin({ data, supprimerLivre }) {
  return (
    <div className="flex flex-col w-[200px] h-[400px] mb-20 mx-auto text-center justify-center mt-20">
      <div className="h-20 mb-8">
        <h2 className="text-2xl text-[#FFC300] font-bold">
          {data.titreLivre}
          <button
            className="ml-8 font-bold text-xl text-red-900"
            type="button"
            onClick={() => supprimerLivre(data)}
          >
            X
          </button>
        </h2>
      </div>
      <div className="">
        <img
          src={data.imageLivre}
          alt={data.titreLivre}
          className="text-[#1C2833] border-4 border-[#1C2833] rounded-lg"
        />
      </div>

      {data.url_boutique ? (
        <div className="flex flex-row justify-center">
          <a
            href={data.url_boutique}
            target="_blank"
            className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            rel="noreferrer"
          >
            Lien Boutique
          </a>
        </div>
      ) : null}
      <div className="mt-8 text-[#FFC300] border-b-4 border-[#FFC300] sm:border-0 pb-4">
        <Link
          to={`/bundle/ecrits/${data.id}`}
          className="p-2 hover:border-2 hover:border-[#FFC300]"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
}
