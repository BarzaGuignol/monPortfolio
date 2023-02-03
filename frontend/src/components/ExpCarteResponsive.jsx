/* eslint-disable react/prop-types */

import React from "react";

export default function ExpCarteResponsive({ data }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-[80%] mx-auto py-8 border-t-4 border-[#FFC300]">
          <p className="text-2xl text-[#3498DB] font-bold mb-2 underline underline-offset-8 decoration-[#FFC300]">
            {data.titre}
          </p>
          <p className="text-2xl text-[#1C2833]">{data.description}</p>
        </div>

        <div className="flex flex-row justify-center mb-8">
          {data.dateDebut ? (
            <>
              <p className="text-center text-2xl font-bold text-[#FFC300]">
                {data.dateDebut} - {data.dateFin}
              </p>
            </>
          ) : (
            <p className="text-center text-2xl font-bold text-[#FFC300]">
              {data.dateFin}
            </p>
          )}
        </div>

        <div className="mb-20">
            <img
              className="w-[50%] h-[50%] mx-auto text-[#1C2833]"
              src={data.url_image}
              alt={data.titre}
            />
          </div>

      </div>
    </div>
  );
}