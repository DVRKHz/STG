import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuienesSomos } from "@/pages/QuienesSomos";
import { Acciones } from "@/pages/Acciones";
import { InformacionRelevante } from "@/pages/InformacionRelevante";
import { Contacto } from "@/pages/Contacto";

export const App = () => {
  return (
    // Router (BrowserRouter): El componente padre que habilita la navegación por URL.
    <Router>
      {/* Routes: Contenedor que analiza la URL actual y renderiza solo la coincidencia más cercana. */}
      <Routes>
        
        {/* RUTA DE INICIO: 
            Configurada para que al entrar a la raíz "/" se muestre QuienesSomos por defecto. 
        */}
        <Route path="/" element={<QuienesSomos />} />
        
        {/* RUTA QUIÉNES SOMOS: 
            Ruta explícita que coincide con el enlace del menú. 
        */}
        <Route path="/quienessomos" element={<QuienesSomos />} />
        
        {/* RUTA ACCIONES: 
            Muestra la sección de líneas de acción y proyectos. 
        */}
        <Route path="/acciones" element={<Acciones />} />
        
        {/* RUTA INFORMACIÓN RELEVANTE: 
            Muestra datos, documentos o información de interés. 
        */}
        <Route path="/informacion-relevante" element={<InformacionRelevante />} />
        
        {/* RUTA CONTACTO: 
            Muestra el formulario o datos de contacto. 
        */}
        <Route path="/contacto" element={<Contacto />} />

        {/* TIP: Podrías añadir una ruta de error 404 aquí abajo:
            <Route path="*" element={<NotFound />} /> 
        */}
      </Routes>
    </Router>
  );
};