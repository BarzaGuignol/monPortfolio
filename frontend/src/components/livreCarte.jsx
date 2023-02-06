/* eslint-disable react/prop-types */

import React from "react";

export default function LivreCarte({ data }) {
  return (
    <div className="flex flex-col w-[200px] h-[400px] mb-20 mx-auto text-center justify-center mt-8">
      <div className="h-20 mb-8">
        <h2 className="text-2xl text-[#FFC300] font-bold">{data.titreLivre}</h2>
      </div>
      <div>
        <img
          src={data.imageLivre}
          alt={data.titreLivre}
          className="text-[#1C2833] border-4 border-[#1C2833] rounded-lg"
        />
      </div>
      <div className="border-b-4 border-[#FFC300] sm:border-0 pb-4">
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
      </div>
    </div>
  );
}
