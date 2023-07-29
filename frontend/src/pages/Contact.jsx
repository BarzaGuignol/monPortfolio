/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99v2988",
        "template_ycakggo",
        form.current,
        "6Ymp3fGA3SOnsxj8n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#21618C] sm:flex sm:flex-row flex flex-col-reverse">
      <div className="w-[90%] mx-auto sm:w-1/2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:w-[50%] mx-auto pb-20 sm:pb-0 sm:pt-20"
        >
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required="required"
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />

          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            E-mail :
          </label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required="required"
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />

          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Sujet :
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required="required"
            className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]"
          />

          <label className="text-2xl text-[#FFC300] mb-2 font-bold">
            Message :
          </label>
          <textarea
            name="message"
            placeholder="Votre message"
            required="required"
            className="p-2 mb-8 h-[200px] rounded-md bg-slate-300 text-[#1C2833]"
          />

          <button
            type="submit"
            className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
          >
            Envoyer
          </button>
        </form>
      </div>
      <div className="sm:w-1/2 text-center w-[90%] mx-auto pb-20 sm:pb-0 my-20 space-y-8 sm:border-l-4 sm:border-[#FFC300] sm:border-b-0 border-b-4 border-[#FFC300]">
        <h2 className="text-[#3498DB] text-4xl underline underline-offset-8 decoration-[#FFC300] w-[50%] mx-auto pb-20">
          Mes liens
        </h2>
        <div className="flex flex-row w-[50%] mx-auto">
          <a
            href="https://github.com/BarzaGuignol"
            target="_blank"
            className="flex flex-col space-between text-2xl text-[#FFC300] w-[50%] mx-auto"
            rel="noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="logo github"
              className="w-20 h-20 rounded-lg mb-8 mx-auto"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yanis-viot/"
            target="_blank"
            className="flex flex-col space-between text-2xl text-[#FFC300] w-[50%] mx-auto"
            rel="noreferrer"
          >
            <img
              src="https://e7.pngegg.com/pngimages/297/542/png-clipart-linkedin-linkedin.png"
              alt="logo linkedin"
              className="w-20 h-20 rounded-lg mb-8 mx-auto"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
