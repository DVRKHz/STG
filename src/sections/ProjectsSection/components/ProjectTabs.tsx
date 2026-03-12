import { useState } from 'react';
import { ProjectCarousel } from '@/sections/ProjectsSection/components/ProjectCarousel';
import { ACCIONES_DATA, PROYECTOS_DATA } from '@/sections/ProjectsSection/components/data';

export const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState<'acciones' | 'proyectos'>('acciones');

  return (
    <div className="w-full py-10">
      {/* Contenedor de Botones */}
      <div
        role="tablist"
        className="flex gap-x-4 mb-8 overflow-x-auto px-4 md:px-12 pb-2 md:overflow-visible no-scrollbar"
      >
        <button
          onClick={() => setActiveTab('acciones')}
          className={`px-8 py-3 rounded-md font-bold transition-all border
            ${activeTab === 'acciones' 
              ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-200" 
              : "bg-white text-gray-600 border-gray-300 hover:bg-cyan-50"}`}
        >
          Acciones
        </button>

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

      {/* Contenido Dinámico con Animación simple */}
      <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="px-4 md:px-12 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === 'acciones' ? 'Nuestras Acciones' : 'Proyectos Recientes'}
          </h2>
          <p className="text-gray-500 mt-2">
            {activeTab === 'acciones' 
              ? 'Iniciativas vecinales y compromiso ambiental.' 
              : 'Desarrollo y planeación en la región sureste.'}
          </p>
        </div>

        {/* El "puente": Inyectamos los datos según el estado */}
        <ProjectCarousel 
          items={activeTab === 'acciones' ? ACCIONES_DATA : PROYECTOS_DATA} 
        />
      </div>
    </div>
  );
};