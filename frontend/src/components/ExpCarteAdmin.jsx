/* eslint-disable react/prop-types */

import React from "react";

export default function ExpCarteAdmin({ data, supprimerExp }) {
  return (
    <div>
      {data.impairOuPair === 1 ? (
        <div className="flex flex-row">
          <div className="w-2/5">
            <img
              className="w-[50%] mx-auto text-[#1C2833]"
              src={data.url_image}
              alt={data.titre}
            />
          </div>

          <div className="w-1/5">
            <div className="w-20 h-20 border-2 border-[#1C2833] rounded-full align-middle mx-auto">
              {data.dateDebut ? (
                <>
                  <p className="text-center text-xl font-bold text-[#FFC300] mt-2">
                    {data.dateDebut}
                  </p>
                  <p className="text-center text-xl font-bold text-[#FFC300]">
                    {data.dateFin}
                  </p>
                </>
              ) : (
                <p className="text-center text-2xl font-bold text-[#FFC300] mt-5">
                  {data.dateFin}
                </p>
              )}
            </div>
            <div className="w-0 h-72 border-2 border-[#1C2833] align-middle mx-auto" />
          </div>

          <div className="w-2/5 pr-20">
            <p className="text-2xl text-[#3498DB] font-bold mb-2 underline underline-offset-8 decoration-[#FFC300]">
              {data.titre}
              <button
              className="ml-8 font-bold text-xl text-red-900"
              type="button"
              onClick={() => supprimerExp(data)}
            >
              X
            </button>
            </p>
            <p className="text-2xl text-[#1C2833]">{data.description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="w-2/5 pl-20">
            <p className="text-2xl text-[#3498DB] font-bold mb-2 underline underline-offset-8 decoration-[#FFC300]">
              {data.titre}
              <button
              className="ml-8 font-bold text-xl text-red-900"
              type="button"
              onClick={() => supprimerExp(data)}
            >
              X
            </button>
            </p>
            <p className="text-2xl text-[#1C2833]">{data.description}</p>
          </div>

          <div className="w-1/5">
            <div className="w-20 h-20 border-2 border-[#1C2833] rounded-full align-middle mx-auto">
              {data.dateDebut ? (
                <>
                  <p className="text-center text-xl font-bold text-[#FFC300] mt-2">
                    {data.dateDebut}
                  </p>
                  <p className="text-center text-xl font-bold text-[#FFC300]">
                    {data.dateFin}
                  </p>
                </>
              ) : (
                <p className="text-center text-2xl font-bold text-[#FFC300] mt-5">
                  {data.dateFin}
                </p>
              )}
            </div>
            <div className="w-0 h-72 border-2 border-[#1C2833] align-middle mx-auto" />
          </div>
          <div className="w-2/5">
            <img
              className="w-[50%] mx-auto"
              src={data.url_image}
              alt={data.titre}
            />
          </div>
        </div>
      )}
    </div>
  );
}
