import React from "react";

export default function BoutonRetourHaut() {
  function retourHaut() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button type="button" className="back-to-top" onClick={retourHaut}>
      ↑
    </button>
  );
}
