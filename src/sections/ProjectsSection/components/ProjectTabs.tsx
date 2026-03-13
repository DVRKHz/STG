import { useState } from 'react';
import { ProjectCarousel } from '@/sections/ProjectsSection/components/ProjectCarousel';
import { ACCIONES_DATA, PROYECTOS_DATA } from '@/sections/ProjectsSection/components/data';

export const ProjectTabs = () => {
  // Estado para controlar qué pestaña está seleccionada. 
  // Solo permite los valores 'acciones' o 'proyectos' (TypeScript).
  const [activeTab, setActiveTab] = useState<'acciones' | 'proyectos'>('acciones');

  return (
    <div className="w-full py-10">
      
      {/* 1. CONTENEDOR DE BOTONES (TABS)
          - role="tablist": Atributo de accesibilidad para indicar que es una lista de pestañas.
          - no-scrollbar: Clase personalizada para permitir scroll en móviles sin mostrar la barra.
      */}
      <div
        role="tablist"
        className="flex gap-x-4 mb-8 overflow-x-auto px-4 md:px-12 pb-2 md:overflow-visible no-scrollbar"
      >
        {/* Botón para activar 'Acciones' */}
        <button
          onClick={() => setActiveTab('acciones')}
          // Clases dinámicas: Si está activo, usa fondo cian y sombra; si no, fondo blanco con hover.
          className={`px-8 py-3 rounded-md font-bold transition-all border
            ${activeTab === 'acciones' 
              ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-200" 
              : "bg-white text-gray-600 border-gray-300 hover:bg-cyan-50"}`}
        >
          Acciones
        </button>

        {/* Botón para activar 'Proyectos' */}
        <button
          onClick={() => setActiveTab('proyectos')}
          className={`px-8 py-3 rounded-md font-bold transition-all border
            ${activeTab === 'proyectos' 
              ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-200" 
              : "bg-white text-gray-600 border-gray-300 hover:bg-cyan-50"}`}
        >
          Proyectos
        </button>
      </div>

      {/* 2. CONTENIDO DINÁMICO
          - key={activeTab}: IMPORTANTE. Al cambiar la "key", React desmonta y vuelve a montar el div, 
            lo que reinicia las animaciones de CSS (animate-in) cada vez que cambias de pestaña.
      */}
      <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {/* Cabecera de la sección activa */}
        <div className="px-4 md:px-12 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {/* Título condicional según el estado */}
            {activeTab === 'acciones' ? 'Nuestras Acciones' : 'Proyectos Recientes'}
          </h2>
          <p className="text-gray-500 mt-2">
            {/* Descripción condicional según el estado */}
            {activeTab === 'acciones' 
              ? 'Iniciativas vecinales y compromiso ambiental.' 
              : 'Desarrollo y planeación en la región sureste.'}
          </p>
        </div>

        {/* 3. EL PUENTE DE DATOS
            - ProjectCarousel es un componente "tonto" o de presentación. 
            - Aquí decidimos qué array de datos inyectarle basándonos en 'activeTab'.
        */}
        <ProjectCarousel 
          items={activeTab === 'acciones' ? ACCIONES_DATA : PROYECTOS_DATA} 
        />
      </div>
    </div>
  );
};