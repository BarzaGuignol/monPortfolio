import React from "react";

export default function Footer() {
  return (
    <footer className="min-h-20 bg-[#1C2833] p-6 place-content-center">
      <div>
        <p className="text-center text-[#3498DB]">
          Copyright Yanis Viot © 2023 - All rights reserved
        </p>
      </div>
      <div className="w-[80px] mx-auto mt-4">
        <a
          className="text-[#FFC300]"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          Le balcon
        </a>
      </div>
    </footer>
  );
}
