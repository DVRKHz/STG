import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// 1. Interfaz actualizada para soportar los nuevos campos
export interface ProjectItem {
  id: number;
  title: string;      // Nombre corto del proyecto
  location: string;   // Ubicación (ej: Tuxtla Gutiérrez)
  category: string;   // Fecha o Categoría (para el Tag)
  text: string;       // Descripción larga (se oculta/revela)
  img: string;
  link: string;
  tagColor?: string;  // Color personalizado para el tag (opcional)
}

interface Props {
  items: ProjectItem[];
}

export const ProjectCarousel = ({ items = [] }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Desplazamiento fluido de 2/3 del contenedor
      const moveDistance = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) {
    return <div className="p-10 text-center text-zinc-400 font-medium">Cargando proyectos...</div>;
  }

  return (
    <div className="relative group w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12">
      
      {/* CABECERA: Título y Controles Estilo Equipo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[4px] uppercase">
            Nuestras Acciones
          </h2>
          <p className="text-zinc-500 text-sm md:text-base italic max-w-xl">
            Proyectos e iniciativas enfocadas en la resiliencia y el desarrollo territorial.
          </p>
        </div>
        
        {/* Controles Desktop */}
        <div className="flex gap-3 self-end md:self-auto">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:scale-110 transition-all shadow-sm active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:scale-110 transition-all shadow-sm active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-zinc-600" />
          </button>
        </div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="shrink-0 w-[88vw] sm:w-[45vw] md:w-[31.5%] snap-center group/card"
          >
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/10"
            >
              {/* TAG DE FECHA (Superior Izquierda) */}
              <div className="absolute top-6 left-6 z-20">
                <span className={`${item.tagColor || 'bg-cyan-600/90'} backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/20`}>
                  {item.category}
                </span>
              </div>

              {/* IMAGEN: Zoom y Desenfoque al Hover */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover/card:scale-110 group-hover/card:blur-[4px]"
              />
              
              {/* CAPA DE DEGRADADO (Overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500" />

              {/* CONTENIDO PRINCIPAL */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                
                {/* 1. SECCIÓN SIEMPRE VISIBLE (Nombre y Ubicación) */}
                <div className="transition-transform duration-500 ease-out group-hover/card:-translate-y-4">
                  {/* Ubicación */}
                  <div className="flex items-center gap-2 mb-3 text-cyan-400 group-hover/card:text-cyan-300 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-[2px]">
                      {item.location}
                    </span>
                  </div>

                  {/* Nombre del Proyecto */}
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* 2. SECCIÓN REVELABLE (Descripción y Enlace) */}
                <div className="max-h-0 group-hover/card:max-h-[220px] overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover/card:opacity-100 mt-0 group-hover/card:mt-6 border-t border-white/10 pt-0 group-hover/card:pt-6">
                  
                  <p className="text-zinc-300 text-sm leading-relaxed line-clamp-4 mb-6 font-medium">
                    {item.text}
                  </p>
                  
                  <div className="flex items-center justify-between group/link border-t border-white/5 pt-4 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-[3px] text-white/90">
                      Ver en Facebook
                    </span>
                    <div className="bg-cyan-500 p-2 rounded-full transform transition-transform duration-300 group-hover/link:translate-x-2 shadow-lg">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};