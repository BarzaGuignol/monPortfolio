import React from "react";

export default function ExpCarte(data) {
  return (
    <div>
      {data.data.impairOuPair === 1 ? (
        <div className="flex flex-row">
          <div className="w-2/5">
            <img
              className="w-[50%] mx-auto"
              src={data.data.url_image}
              alt={data.data.titre}
            />
          </div>

          <div className="w-1/5">
            <div className="w-20 h-20 border-2 border-[#1C2833] rounded-full align-middle mx-auto">
              {data.data.dateDebut ? (
                <>
                  <p className="text-center text-xl font-bold text-[#FFC300] mt-2">
                    {data.data.dateDebut}
                  </p>
                  <p className="text-center text-xl font-bold text-[#FFC300]">
                    {data.data.dateFin}
                  </p>
                </>
              ) : (
                <p className="text-center text-2xl font-bold text-[#FFC300] mt-5">
                  {data.data.dateFin}
                </p>
              )}
            </div>
            <div className="w-0 h-72 border-2 border-[#1C2833] align-middle mx-auto" />
          </div>

          <div className="w-2/5">
            <p className="text-2xl text-[#1C2833]">{data.data.description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="w-2/5">
            <p className="text-2xl text-[#1C2833]">{data.data.description}</p>
          </div>

          <div className="w-1/5">
            <div className="w-20 h-20 border-2 border-[#1C2833] rounded-full align-middle mx-auto">
              {data.data.dateDebut ? (
                <>
                  <p className="text-center text-xl font-bold text-[#FFC300] mt-2">
                    {data.data.dateDebut}
                  </p>
                  <p className="text-center text-xl font-bold text-[#FFC300]">
                    {data.data.dateFin}
                  </p>
                </>
              ) : (
                <p className="text-center text-2xl font-bold text-[#FFC300] mt-5">
                  {data.data.dateFin}
                </p>
              )}
            </div>
            <div className="w-0 h-72 border-2 border-[#1C2833] align-middle mx-auto" />
          </div>
          <div className="w-2/5">
            <img
              className="w-[50%] mx-auto"
              src={data.data.url_image}
              alt={data.data.titre}
            />
          </div>
        </div>
      )}
    </div>
  );
}
