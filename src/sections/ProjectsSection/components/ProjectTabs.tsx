import { useState, useEffect, useCallback } from 'react';
import { ProjectCarousel } from '@/sections/ProjectsSection/components/ProjectCarousel';
import { ACCIONES_DATA, CIRES_DATA, ProjectItem } from '@/sections/ProjectsSection/components/data';

export const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState<'acciones' | 'cires'>('acciones');
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  // Manejador del clic en las tarjetas del carrusel
  const handleItemClick = (item: ProjectItem) => {
    if (activeTab === 'cires' && item.pdfUrl) {
      setSelectedPdf({ title: item.title, url: item.pdfUrl });
    } else if (item.link && item.link !== '#') {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  // Cierre con la tecla Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedPdf(null);
    }
  }, []);

  // Bloqueo de scroll cuando el modal está activo
  useEffect(() => {
    if (!selectedPdf) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPdf, handleKeyDown]);

  return (
    <div className="w-full py-6 font-plus_jakarta_sans">
      
      {/* 1. CONTENEDOR DE BOTONES (TABS) */}
      <div
        role="tablist"
        aria-label="Pestañas de proyectos e iniciativas"
        className="flex gap-x-3 mb-8 overflow-x-auto px-4 md:px-0 pb-2 no-scrollbar"
      >
        <button
          role="tab"
          aria-selected={activeTab === 'acciones'}
          onClick={() => setActiveTab('acciones')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border cursor-pointer select-none ${
            activeTab === 'acciones' 
              ? "bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/20" 
              : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
          }`}
        >
          Acciones Territoriales
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'cires'}
          onClick={() => setActiveTab('cires')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border cursor-pointer select-none ${
            activeTab === 'cires' 
              ? "bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/20" 
              : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
          }`}
        >
          CIRES 2026
        </button>
      </div>

      {/* 2. CONTENIDO DINÁMICO */}
      <div key={activeTab} className="animate-in fade-in duration-300 space-y-6">
        <div className="px-4 md:px-0 space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
            {activeTab === 'acciones' 
              ? 'Nuestras Acciones Territoriales' 
              : 'Coloquio Internacional Restauración Ecológica y Sustentabilidad (CIRES 2026)'}
          </h2>
          
          <p className="text-zinc-600 text-sm md:text-base whitespace-pre-line leading-relaxed max-w-4xl">
            {activeTab === 'acciones' 
              ? 'En esta sección se pueden conocer algunas de las acciones relevantes que, sobre el territorio, realiza la Red Sustentabilidad, Territorio y Gobernanza (STG). Aquí sólo se presenta una foto alusiva a cada acción: al pulsar sobre una Acción, el sistema abre la ventana de Facebook donde se encuentra albergada la nota completa.' 
              : 'A través de conferencias magistrales, ponencias organizadas en paneles, talleres y actividades culturales; el CIRES 2026 tuvo como propósito propiciar la reflexión, análisis e intercambio de experiencias entre investigadores, especialistas, estudiantes y actores comunitarios en torno a los procesos de restauración ecológica, sustentabilidad y construcción colectiva del conocimiento para la resignificación territorial.\n\nDurante los días 26, 27, 28 y 29 de agosto de 2026, en Instalaciones de Zoológico Miguel Álvarez del Toro (ZOOMAT) de Tuxtla Gutiérrez, Chiapas, se realizaron las actividades de Coloquio: organizadas en tres ejes temáticos se presentaron 3 conferencias magistrales, 8 ponencias magistrales de área, un total de 26 ponencias de mesa, se realizaron 2 talleres y en el último día se visitó una UMA en el municipio de Berriozábal, Chiapas.\n\nEn el carrusel de abajo puede consultar el contenido de las ponencias.'}
          </p>
        </div>

        {/* 3. CARRUSEL DE DATOS */}
        <ProjectCarousel 
          items={activeTab === 'acciones' ? ACCIONES_DATA : CIRES_DATA} 
          onItemClick={handleItemClick}
        />
      </div>

      {/* 4. MODAL VISOR DE PDF */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 md:p-8 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPdf(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPdf.title}
        >
          <div 
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 text-white">
              <h3 className="text-sm md:text-base font-bold truncate pr-4 text-zinc-100">
                {selectedPdf.title}
              </h3>
              
              <div className="flex items-center gap-x-3 shrink-0">
                <a
                  href={selectedPdf.url}
                  download
                  className="px-3.5 py-1.5 text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-2xs"
                >
                  Descargar PDF
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg transition-colors text-lg font-bold leading-none cursor-pointer"
                  aria-label="Cerrar ventana emergente"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido / Visor de PDF */}
            <div className="flex-1 bg-zinc-100 w-full h-full relative">
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