import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="min-h-20 bg-[#1C2833] p-6 place-content-center">
      <div>
        <p className="text-center text-[#3498DB]">
          Copyright Yanis Viot © 2023 - All rights reserved
        </p>
      </div>
      <div className="w-[80px] mx-auto mt-4">
        <Link
          className="text-[#FFC300]"
          to="/lebalcon"
          target="_blank"
          rel="noreferrer"
        >
          Le balcon
        </Link>
      </div>
    </footer>
  );
}
