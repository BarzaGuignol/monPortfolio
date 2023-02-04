/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#21618C] flex flex-row">
      <div className="w-1/2">
        <form name="contact" method="post" className="flex flex-col w-[50%] mx-auto pt-20" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact" />
          <label className="text-2xl text-[#FFC300] mb-2 font-bold">Nom :</label>
          <input type="text" name="name" className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]" />

          <label className="text-2xl text-[#FFC300] mb-2 font-bold">E-mail :</label>
          <input type="email" name="email" className="p-2 mb-8 rounded-md bg-slate-300 text-[#1C2833]" />

          <label className="text-2xl text-[#FFC300] mb-2 font-bold">Message :</label>
          <textarea name="message" className="p-2 mb-8 h-[200px] rounded-md bg-slate-300 text-[#1C2833]" />

          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="w-1/2 my-20 space-y-8 border-l-4 border-[#FFC300]">
        <h2 className="text-[#3498DB] text-4xl underline underline-offset-8 decoration-[#FFC300] w-[50%] mx-auto pb-20">Mes liens</h2>
        <a href="https://github.com/BarzaGuignol" target="_blank" className="flex flex-row space-between text-2xl text-[#FFC300] w-[50%] mx-auto">Lien Github : <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="logo github" className="ml-4 w-10 h-10 rounded lg"/></a>
        <a href="https://github.com/BarzaGuignol" target="_blank" className="flex flex-row space-between text-2xl text-[#FFC300] w-[50%] mx-auto">Lien LinkedIn : <img src="https://e7.pngegg.com/pngimages/297/542/png-clipart-linkedin-linkedin.png" alt="logo linkedin" className="ml-4 w-10 h-10 rounded-lg"/></a>
      </div>
    </div>
  );
}
