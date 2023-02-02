import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/curriculumvitae" element={<CurriculumVitae />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mystere" element={<Mystere />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
