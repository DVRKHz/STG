import { useState } from 'react';
// Importa tus componentes de contenido aquí
import { ProjectCarousel } from '@/sections/ProjectsSection/components/ProjectCarousel';
// import { ProyectosContent } from './ProyectosContent';

export const ProjectTabs = () => {
  // Estado para saber qué pestaña está activa (por defecto 'acciones')
  const [activeTab, setActiveTab] = useState('acciones');

  return (
    <div className="w-full">
      {/* Contenedor de Botones (Tu código original con lógica añadida) */}
      <div
        role="tablist"
        className="flex gap-x-4 mb-8 overflow-x-auto pb-2 md:overflow-visible"
      >
        {/* Botón Acciones */}
        <button
          onClick={() => setActiveTab('acciones')}
          role="tab"
          aria-selected={activeTab === 'acciones'}
          className={`relative font-medium px-8 py-3 rounded-md transition-all font-plus_jakarta_sans border border-solid
            ${activeTab === 'acciones' 
              ? "bg-cyan-500 text-white border-cyan-500" 
              : "bg-white text-black border-stone-300 hover:bg-cyan-50"
            }`}
        >
          Acciones
        </button>

        {/* Botón Proyectos */}
        <button
          onClick={() => setActiveTab('proyectos')}
          role="tab"
          aria-selected={activeTab === 'proyectos'}
          className={`relative font-medium px-8 py-3 rounded-md transition-all font-plus_jakarta_sans border border-solid
            ${activeTab === 'proyectos' 
              ? "bg-cyan-500 text-white border-cyan-500" 
              : "bg-white text-black border-stone-300 hover:bg-cyan-50"
            }`}
        >
          Proyectos
        </button>
      </div>

      {/* SECCIÓN DE CONTENIDO DINÁMICO */}
      <div className="mt-6 transition-opacity duration-300">
        {activeTab === 'acciones' ? (
          <div id="seccion-acciones">
            {/* Aquí va el contenido o componente de Acciones */}
            <h2 className="text-2xl font-bold">Nuestras Acciones</h2>
            <p>Contenido relacionado con las acciones sociales...</p>
          </div>
        ) : (
          <div id="seccion-proyectos">
            {/* Aquí va el contenido o componente de Proyectos */}
            <h2 className="text-2xl font-bold">Proyectos Recientes</h2>
            <p>Lista de proyectos en el sureste...</p>
          </div>
        )}
      </div>
    </div>
  );
};