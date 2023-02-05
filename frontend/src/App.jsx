import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@components/Navbar";
import CurriculumVitae from "@pages/CurriculumVitae";
import CurriculumVitaeAdmin from "@pages/CurriculumVitaeAdmin";
import Projets from "@pages/Projets";
import ProjetsAdmin from "@pages/ProjetsAdmin";
import Passion from "@pages/Passion";
import PassionAdmin from "@pages/PassionAdmin";
import Contact from "@pages/Contact";
import Mystere from "@pages/Mystere";
import Footer from "@components/Footer";
import APITableaux from "@pages/APITableaux";
import APITableauxAdmin from "@pages/APITableauxAdmin";
import PanneauAdministrateur from "@pages/PanneauAdministrateur";
import Accueil from "./pages/Accueil";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/curriculumvitae" element={<CurriculumVitae />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mystere" element={<Mystere />} />
          <Route path="/tableaux" element={<APITableaux />} />
          <Route path="/bundle" element={<PanneauAdministrateur />} />
          <Route path="/bundle/curriculumvitae" element={<CurriculumVitaeAdmin />} />
          <Route path="/bundle/projets" element={<ProjetsAdmin />} />
          <Route path="/bundle/passion" element={<PassionAdmin />} />
          <Route path="/bundle/tableaux" element={<APITableauxAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
