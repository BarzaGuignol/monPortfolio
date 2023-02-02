import Navbar from "@components/Navbar";
import CurriculumVitae from "@pages/CurriculumVitae";
import Projets from "@pages/Projets";
import Passion from "@pages/Passion";
import Contact from "@pages/Contact";
import Mystere from "@pages/Mystere";
import Footer from "@components/Footer";
import Accueil from "./pages/Accueil";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Accueil />
      <Navbar />
      <CurriculumVitae />
      <Projets />
      <Passion />
      <Contact />
      <Mystere />
      <Footer />

      <p>coucou</p>
    </div>
  );
}

export default App;
