import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";
import Admin from "../contexts/Admin";

export default function Login() {
  const [connexion, setConnexion] = useState({
    identifiant: "",
    motDePasse: "",
  });
  const [message, setMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const adminContext = useContext(Admin.AdminContext);
  const navigate = useNavigate();

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  const handleSubmit = (route) => {
    setMessage("");
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (pwdPattern.test(connexion.password)) {
      apiConnexion
        .post("/login", { ...connexion })
        .then((res) => {
          navigate(route);
          adminContext.handleAdmin(res.data);
        })
        .catch((err) => {
          setMessage(err.response.data);
        });
    } else {
      setMessage("mot de passe erroné !");
    }
  };
  return (
    <div className="min-h-screen bg-[#21618C]">
      <h1 className="flex justify-center font-bold text-4xl pt-16 py-8">
        Connexion
      </h1>
      <div className="flex justify-center card rounded-none ml-8 mr-3">
        <form>
          <div className="group">
            <input
              className="mb-5 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="email-address"
              name="identifiant"
              type="text"
              value={connexion.identifiant}
              onChange={(e) =>
                setConnexion({ ...connexion, identifiant: e.target.value })
              }
              autoComplete="identifiant"
              required
              placeholder="identifiant"
            />
          </div>
          <div className="group flex flex-row">
            <input
              className="mb-3 pl-3 border-2 border-[#e7ebec] w-80 rounded-lg outline-[#ced7da] text-lg"
              id="password"
              name="mot de passe"
              type={hidePassword ? "password" : "text"}
              value={connexion.motDePasse}
              onChange={(e) =>
                setConnexion({ ...connexion, motDePasse: e.target.value })
              }
              autoComplete="current-password"
              required
              placeholder="Mot de passe"
            />
            <div>
              <button
                className="w-[20px] h-[20px] ml-2 mt-1.5"
                onClick={showPassword}
                type="button"
              >
                {hidePassword ? (
                  <img
                    src="https://www.svgrepo.com/show/384356/close-cross-eye-hidden-vision.svg"
                    alt="eyeCross"
                  />
                ) : (
                  <img
                    src="https://www.svgrepo.com/show/384342/eye-look-show-view-visible-visiblity.svg"
                    alt="eyeOpen"
                  />
                )}
              </button>
            </div>
          </div>
          <p>{message}</p>
          <div className="group m-3 flex justify-center">
            <button
              className="bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-4 mb-2"
              type="button"
              onClick={() => handleSubmit("/home")}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
