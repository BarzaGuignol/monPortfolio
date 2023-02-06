import React from "react";
import { Link } from "react-router-dom";

import "./Accueil.css";

export default function Accueil() {
  
  function retourHaut() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-[#21618C]">
      <div className="min-h-screen flex flex-col w-4/5 sm:w-2/5 mx-auto pt-20 sm:pt-48 corners">
        <div className="top left border-[#FFC300]" />
        <div className="bottom right border-[#FFC300]" />
        <p className="text-2xl text-[#FFC300]">Bonjour, je suis</p>
        <h1 className="text-6xl sm:text-8xl font-bold text-[#3498DB] mt-4">Yanis Viot.</h1>
        <h2 className="text-5xl sm:text-7xl font-bold text-[#1C2833] mt-4">
          Un artisan du web.
        </h2>
        <p className="text-2xl text-[#1C2833] mt-8">
          Je suis un développeur web fullstack spécialisé dans la conception de
          site internet. Actuellement, je suis en recherche de nouvelles
          connaissances et compétences à explorer.
        </p>
        <Link
          to="/curriculumvitae"
          className="bg-transparent text-[#FFC300] text-center font-bold border-2 border-[#FFC300] sm:w-1/3 mt-12 p-2 rounded hover:bg-[#FFC300] hover:opacity-80 hover:text-[#1C2833]"
        >
          En savoir plus
        </Link>
      </div>

      <div className="w-[80%] mx-auto sm:w-1/3 sm:ml-96 border-b-2 border-[#1C2833]">
        <h2 className="text-4xl font-bold text-[#3498DB] flex flex-row">
          <p className="text-4xl font-bold text-[#FFC300] mr-4">-</p>Mes projets
        </h2>
        <Link to="/projets" onClick={retourHaut}>
          <p className="text-2xl text-[#1C2833] mt-8 hover:text-[#FFC300]">
            Pour découvrir mes compétences à travers des sites internet réalisés
            par mes soins.
          </p>
          <img
            className="my-8 hover:border-4 hover:border-[#FFC300]"
            src="https://img.freepik.com/vecteurs-libre/developpeurs-web-dessines-main_23-2148819604.jpg?w=1380&t=st=1675414187~exp=1675414787~hmac=3c7d2a271751350b5d931d9e692120d3239f83aada9d1a5d922ab343af9bda46"
            alt="bloc projets"
          />
        </Link>
      </div>
      <div className="w-[80%] mx-auto sm:w-1/3 sm:ml-auto sm:mr-96 mt-20 border-b-2 border-[#1C2833]">
        <h2 className="text-4xl font-bold text-[#3498DB] flex flex-row-reverse">
          <p className="text-4xl font-bold text-[#FFC300] ml-4">-</p>Mes
          passions
        </h2>
        <Link to="/passion" onClick={retourHaut}>
          <p className="text-2xl text-[#1C2833] mt-8 hover:text-[#FFC300]">
            D'autres sujets sur lesquels j'ai exercé mon savoir et développé de
            la compétence.
          </p>
          <img
            className="my-8 hover:border-4 hover:border-[#FFC300]"
            src="https://img.freepik.com/vecteurs-libre/illustration-style-picasso-dessine-main_23-2149577316.jpg?w=1380&t=st=1675414404~exp=1675415004~hmac=9663159824e63f0a41f9b2de21358f8d7afaa2bf10f61bb3d49ad818af11d1c8"
            alt="bloc passions"
          />
        </Link>
      </div>
      <div className="w-[80%] mx-auto sm:w-1/3 sm:ml-96 mt-20 border-b-2 border-[#1C2833]">
        <h2 className="text-4xl font-bold text-[#3498DB] flex flex-row">
          <p className="text-4xl font-bold text-[#FFC300] mr-4">-</p>Mes
          contacts
        </h2>
        <Link to="/contact" onClick={retourHaut}>
          <p className="text-2xl text-[#1C2833] mt-8 hover:text-[#FFC300]">
            Intéressé par mon profil ? Un mot, une remarque à me dire ? C'est
            par ici que ça se passe.
          </p>
          <img
            className="my-8 hover:border-4 hover:border-[#FFC300]"
            src="https://img.freepik.com/vecteurs-libre/marketing-par-e-mail-discussion-internet-assistance-24-heures-24_335657-3009.jpg?w=1380&t=st=1675414657~exp=1675415257~hmac=ceeeb23e9d8e8824301a3d3a97d524be2b4636b9b55afcf8781a4904f20089b1"
            alt="bloc contact"
          />
        </Link>
      </div>
      <div className="w-[80%] mx-auto sm:w-1/3 sm:ml-auto sm:mr-96 mt-20 border-b-2 border-[#1C2833]">
        <h2 className="text-4xl font-bold text-[#3498DB] flex flex-row-reverse">
          <p className="text-4xl font-bold text-[#FFC300] ml-4">-</p>Le mystère
        </h2>
        <Link to="/mystere" onClick={retourHaut}>
          <p className="text-2xl text-[#1C2833] mt-8 hover:text-[#FFC300]">
            Voilà bien une étrangeté, une anomalie, qu'est-ce que ça fait là sur
            un portfolio ? je me le demande bien.
          </p>
          <img
            className="my-8 hover:border-4 hover:border-[#FFC300]"
            src="https://img.freepik.com/vecteurs-libre/illustration-boite-mystere-degrade_23-2149491633.jpg?w=1380&t=st=1675414893~exp=1675415493~hmac=284a16c686b02573381bce0847fd4836b5800a511c831e5226257eae90a4f11e"
            alt="bloc mystère"
          />
        </Link>
      </div>
      <div className="pt-20 bg-[#21618C]" />
    </div>
  );
}
