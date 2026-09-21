import { useState } from 'react';
import { ProjectCarousel } from '@/sections/ProjectsSection/components/ProjectCarousel';
import { ACCIONES_DATA, CIRES_DATA, ProjectItem } from '@/sections/ProjectsSection/components/data';

export const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState<'acciones' | 'cires'>('acciones');
  // Estado para controlar la ventana emergente con el PDF
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  // Manejador del clic en las tarjetas del carrusel
  const handleItemClick = (item: ProjectItem) => {
    if (activeTab === 'cires' && item.pdfUrl) {
      // Abre la ventana emergente con el PDF de CIRES
      setSelectedPdf({ title: item.title, url: item.pdfUrl });
    } else if (item.link && item.link !== '#') {
      // Abre el enlace externo (Facebook) en una nueva pestaña
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full py-10">
      
      {/* 1. CONTENEDOR DE BOTONES (TABS) */}
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
          onClick={() => setActiveTab('cires')}
          className={`px-8 py-3 rounded-md font-bold transition-all border
            ${activeTab === 'cires' 
              ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-200" 
              : "bg-white text-gray-600 border-gray-300 hover:bg-cyan-50"}`}
        >
          CIRES 2026
        </button>
      </div>

      {/* 2. CONTENIDO DINÁMICO */}
      <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="px-4 md:px-12 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === 'acciones' 
              ? 'Nuestras Acciones' 
              : 'Coloquio Internacional Restauración Ecológica y Sustentabilidad'}
          </h2>
          <p className="text-gray-500 mt-2">
            {activeTab === 'acciones' 
              ? 'Iniciativas vecinales y compromiso ambiental.' 
              : 'Información y ponencias del CIRES 2026. Haz clic en una tarjeta para consultar el documento.'}
          </p>
        </div>

        {/* 3. CAROUSEL DE DATOS */}
        <ProjectCarousel 
          items={activeTab === 'acciones' ? ACCIONES_DATA : CIRES_DATA} 
          onItemClick={handleItemClick}
        />
      </div>

      {/* 4. VENTANA EMERGENTE (MODAL PARA PDF) */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPdf(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white border-b border-gray-800">
              <h3 className="text-lg font-semibold truncate pr-4">{selectedPdf.title}</h3>
              <div className="flex items-center gap-x-3">
                <a
                  href={selectedPdf.url}
                  download
                  className="px-3 py-1.5 text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white rounded transition-colors"
                >
                  Descargar PDF
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors text-xl font-bold leading-none"
                  aria-label="Cerrar ventana"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido / Visor de PDF */}
            <div className="flex-1 bg-gray-100 w-full h-full">
              <iframe
                src={`${selectedPdf.url}#toolbar=1`}
                className="w-full h-full border-none"
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};