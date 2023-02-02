import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="hidden sm:flex justify-between p-8 bg-[#1C2833] font-bold">
        <Link to="/">
          {/* <img className="ml-10 mt-3 aspect-auto" src={Logo} alt="logo" /> */}
          <h2 className="text-4xl text-[#3498DB]">
            Yanis Viot <strong className="text-[#FFC300]">.</strong>
          </h2>
        </Link>
        <div>
          <div className="inline-block text-center place-content-center items-center mr-8">
            <Link to="/">
              <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline">
                Accueil
              </p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-8">
            <Link to="/curriculumvitae">
              <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline">
                CV
              </p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-8">
            <Link to="/projets">
              <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline">
                Projets
              </p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-8">
            <Link to="/passion">
              <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline">
                Passion
              </p>
            </Link>
          </div>
          <div className="inline-block text-center place-content-center mr-8">
            <Link to="/contact">
              <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden relative flex bg-[#1C2833] justify-between">
        <Link to="/">
          <h2 className="text-4xl text-[#3498DB] mt-2">
            Yanis Viot <strong className="text-[#FFC300]">.</strong>
          </h2>
        </Link>
        <button
          className="p-4 space-y-2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#3498DB] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#3498DB] rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-[#3498DB] rounded-md`}
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full z-40 bg-white`}
        >
          <div className="relative w-full bg-[#1C2833]">
            <button
              className="absolute right-0 mr-4 mt-4 text-[#3498DB] hover:text-[#FFC300] text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
            <div className="p-10">
              <Link to="/">
                <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline py-2">
                  Accueil
                </p>
              </Link>
              <Link to="/curriculumvitae">
                <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline py-2">
                  CV
                </p>
              </Link>
              <Link to="/projets">
                <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline py-2">
                  Projets
                </p>
              </Link>
              <Link to="/passion">
                <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline py-2">
                  Passion
                </p>
              </Link>
              <Link to="/contact">
                <p className="text-2xl text-[#3498DB] hover:text-[#FFC300] hover:underline py-2">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
