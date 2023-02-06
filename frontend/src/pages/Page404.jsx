import React from "react";
import { useNavigate } from "react-router-dom";

import "./Page404.css";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#21618C]">
      <div className="pt-10 bg-[#21618C]">
        <section className="page_404 flex justify-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-10 col-sm-offset-1 text-center bg-[#21618C]">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center text-[#1C2833]">
                      404
                    </h1>
                  </div>
                  <div className="contant_box_404 bg-[#21618C]">
                    <h3 className="pt-10 text-[#FFC300] font-bold">On dirait que vous êtes perdu,</h3>
                    <p className="pb-5 text-[#FFC300] font-bold">
                      la page que vous recherchez n'est pas disponible !
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      type="button"
                      className=" bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
