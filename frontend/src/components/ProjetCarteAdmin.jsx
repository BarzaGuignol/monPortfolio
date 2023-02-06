/* eslint-disable react/prop-types */

import React from "react";
import { Link } from "react-router-dom";

export default function ProjetCarteAdmin({ data, supprimerProjet }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-[#FFC300] font-bold mb-2">
        {data.titre}
        <button
          className="ml-8 font-bold text-xl text-red-900"
          type="button"
          onClick={() => supprimerProjet(data)}
        >
          X
        </button>
      </h2>
      <img
        src={data.url_image}
        alt={data.titre}
        className="w-[80%] mx-auto text-[#1C2833] border-4 border-[#1C2833] rounded-lg h-48"
      />

      {data.url_site ? (
        <div className="flex flex-row space-x-2 justify-center">
          <a
            href={data.url_github}
            target="_blank"
            className="w-1/3 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            rel="noreferrer"
          >
            Lien Repo
          </a>
          <a
            href={data.url_site}
            target="_blank"
            className="w-1/3 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            rel="noreferrer"
          >
            Lien Site
          </a>
        </div>
      ) : (
        <div className="flex flex-row justify-center">
          <a
            href={data.url_github}
            target="_blank"
            className="w-1/3 bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
            rel="noreferrer"
          >
            Lien Repo
          </a>
        </div>
      )}
      <div className="mt-8 text-[#FFC300]">
        <Link
          to={`/bundle/projets/${data.id}`}
          className="p-2 hover:border-2 hover:border-[#FFC300]"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
}
