import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuienesSomos } from "@/pages/QuienesSomos";
import { Acciones } from "@/pages/Acciones";
import { InformacionRelevante } from "@/pages/InformacionRelevante";
import { Contacto } from "@/pages/Contacto";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuienesSomos />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/acciones" element={<Acciones />} />
        <Route path="/informacion-relevante" element={<InformacionRelevante />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};