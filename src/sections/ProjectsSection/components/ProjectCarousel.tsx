import { useRef, useState, useEffect, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, MapPin, User, Hash } from "lucide-react";

export interface ProjectItem {
  id: number; // Identificador único del proyecto
  title: string; // Título del proyecto
  speaker?: string; // Campo opcional para el expositor
  code?: string;    // Código específico de la ponencia
  location: string; // Ubicación de la acción o ponencia
  category: string; // Categoría del proyecto
  text: string; // Descripción breve del proyecto
  img: string; // URL de la imagen representativa del proyecto
  link: string; // Enlace externo o '#' si no hay enlace
  pdfUrl?: string; // URL del PDF asociado al proyecto (opcional)
  tagColor?: string; // Color de fondo del tag/categoría (opcional)
}

interface Props {
  items?: ProjectItem[];
  onItemClick?: (item: ProjectItem) => void;
}

export const ProjectCarousel = ({ items = [], onItemClick }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasItems = items && items.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        
        if (maxScrollLeft <= 0) return;

        const scrollFraction = scrollLeft / maxScrollLeft;
        const index = Math.round(scrollFraction * (items.length - 1));
        
        setActiveIndex(index);
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll, { passive: true });
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveDistance = direction === 'left' ? -clientWidth / 1.2 : clientWidth / 1.2;
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
  };

  const scrollToItem = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const targetScroll = (index / (items.length - 1)) * maxScrollLeft;
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleCardClick = (e: MouseEvent<HTMLAnchorElement>, item: ProjectItem) => {
    if (onItemClick && (item.pdfUrl || item.link === '#' || !item.link)) {
      e.preventDefault();
      onItemClick(item);
    }
  };

  if (!hasItems) return null;

  return (
    <div className="relative group w-full max-w-[1600px] mx-auto px-4 md:px-16 py-8">
      
      {/* FLECHAS DE NAVEGACIÓN */}
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 
                   p-4 rounded-full border border-zinc-200 bg-white/90 backdrop-blur-sm 
                   shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-cyan-600" />
      </button>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 
                   p-4 rounded-full border border-zinc-200 bg-white/90 backdrop-blur-sm 
                   shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-cyan-600" />
      </button>

      {/* CONTENEDOR DEL CARRUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => {
          const isPdf = Boolean(item.pdfUrl);
          const displayCode = item.code || (item.speaker ? item.location : null);
          
          // Ocultar la categoría/fecha para las tarjetas que pertenecen a CIRES (por ponente o código)
          const hideTag = Boolean(item.speaker || item.code || item.category.includes('/'));

          return (
            <div key={item.id} className="shrink-0 w-[85vw] sm:w-[50vw] md:w-[450px] snap-center group/card">
              <a 
                href={item.link || '#'} 
                target={isPdf ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                onClick={(e) => handleCardClick(e, item)}
                className="block relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-md transition-all duration-500 md:hover:shadow-2xl md:hover:shadow-cyan-900/20 cursor-pointer"
              >
                {/* TAG / CATEGORÍA (Se muestra únicamente en Acciones u otros ítems generales) */}
                {!hideTag && (
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`${item.tagColor || 'bg-cyan-600/90'} backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-sm`}>
                      {item.category}
                    </span>
                  </div>
                )}

                {/* IMAGEN DE FONDO */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out md:group-hover/card:scale-110 md:group-hover/card:blur-[2px]"
                />
                
                {/* DEGRADADO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500" />

                {/* CONTENIDO PRINCIPAL */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10 md:group-hover/card:opacity-0 transition-opacity duration-300">
                  <div>
                    {/* EXPOSITOR */}
                    {item.speaker && (
                      <div className="flex items-center gap-2 mb-1.5 text-cyan-300">
                        <User className="w-4 h-4 shrink-0" />
                        <span className="text-[12px] md:text-[13px] font-bold tracking-wide">
                          {item.speaker}
                        </span>
                      </div>
                    )}

                    {/* CÓDIGO O UBICACIÓN */}
                    <div className="flex items-center gap-2 mb-3 text-cyan-400">
                      {displayCode ? (
                        <>
                          <Hash className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[2px]">
                            {displayCode}
                          </span>
                        </>
                      ) : (
                        <>
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[2px]">
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>

                    {/* TÍTULO COMPLETO (Sin recortes por line-clamp) */}
                    <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* CAPA DE DESCRIPCIÓN (Solo visible al hacer Hover / Touch) */}
                <div className="absolute inset-0 p-8 md:p-10 bg-zinc-950/90 backdrop-blur-sm flex flex-col justify-between text-white opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 z-20">
                  <div className="pt-6 overflow-y-auto no-scrollbar max-h-[75%]">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block mb-2">
                      {displayCode ? `Ponencia: ${displayCode}` : item.location}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold leading-snug mb-3 text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 group/link shrink-0">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[2px] text-white/80">
                      {isPdf ? 'Ver Documento Completo' : 'Ver en Facebook'}
                    </span>
                    <div className="bg-cyan-500 p-2 md:p-2.5 rounded-full transition-transform md:group-hover/link:translate-x-1">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

              </a>
            </div>
          );
        })}
      </div>

      {/* INDICADORES (DOTS) */}
      <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToItem(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'w-8 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]' 
                : 'w-2 bg-zinc-300'
            }`}
            aria-label={`Ir al proyecto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};