import { useRef, useState, useEffect, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, MapPin, User, Hash, ExternalLink, FileText } from "lucide-react";

export interface ProjectItem {
  id: number;
  title: string;
  speaker?: string;
  code?: string;
  location: string;
  category: string;
  text: string;
  img: string;
  link: string;
  pdfUrl?: string;
  tagColor?: string;
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
      const moveDistance = direction === 'left' ? -clientWidth / 1.3 : clientWidth / 1.3;
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
    <div className="relative group/carousel w-full max-w-[1600px] mx-auto py-6 font-plus_jakarta_sans">
      
      {/* FLECHAS DE NAVEGACIÓN DESKTOPS */}
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 
                   p-3.5 rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md 
                   shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 
                   hover:scale-105 active:scale-95 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
        aria-label="Carrusel anterior"
      >
        <ChevronLeft className="w-5 h-5 text-cyan-700" />
      </button>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 
                   p-3.5 rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md 
                   shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 
                   hover:scale-105 active:scale-95 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
        aria-label="Carrusel siguiente"
      >
        <ChevronRight className="w-5 h-5 text-cyan-700" />
      </button>

      {/* CONTENEDOR DEL CARRUSEL DE TARJETAS */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => {
          const isPdf = Boolean(item.pdfUrl);
          const displayCode = item.code || (item.speaker ? item.location : null);
          const hideTag = Boolean(item.speaker || item.code || item.category.includes('/'));

          return (
            <div key={item.id} className="shrink-0 w-[85vw] sm:w-[320px] md:w-[380px] snap-center group/card">
              <a 
                href={item.link || '#'} 
                target={isPdf ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                onClick={(e) => handleCardClick(e, item)}
                className="block relative aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900 shadow-md transition-all duration-500 md:hover:shadow-2xl md:hover:shadow-cyan-950/30 cursor-pointer border border-zinc-200/50"
              >
                {/* TAG / CATEGORÍA */}
                {!hideTag && (
                  <div className="absolute top-5 left-5 z-20">
                    <span className={`${item.tagColor || 'bg-cyan-600/90'} backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20 shadow-xs`}>
                      {item.category}
                    </span>
                  </div>
                )}

                {/* IMAGEN DE FONDO */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out md:group-hover/card:scale-105 md:group-hover/card:blur-[1px]"
                />
                
                {/* DEGRADADO OSCURO DE LECTURA */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-black/20" />

                {/* CONTENIDO PRINCIPAL (VISTA BASE) */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10 md:group-hover/card:opacity-0 transition-opacity duration-300">
                  <div className="space-y-2">
                    {/* EXPOSITOR / PONENTE */}
                    {item.speaker && (
                      <div className="flex items-center gap-2 text-cyan-300">
                        <User className="w-4 h-4 shrink-0 text-cyan-400" />
                        <span className="text-xs md:text-sm font-bold tracking-wide truncate">
                          {item.speaker}
                        </span>
                      </div>
                    )}

                    {/* CÓDIGO O UBICACIÓN */}
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      {displayCode ? (
                        <>
                          <Hash className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider">
                            {displayCode}
                          </span>
                        </>
                      ) : (
                        <>
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider">
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>

                    {/* TÍTULO PRINCIPAL */}
                    <h3 className="text-lg md:text-xl font-bold leading-snug tracking-tight line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* CAPA DE DETALLE (VISUALIZACIÓN EN HOVER) */}
                <div className="absolute inset-0 p-6 md:p-8 bg-zinc-950/90 backdrop-blur-xs flex flex-col justify-between text-white opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 z-20">
                  <div className="space-y-2 overflow-y-auto no-scrollbar max-h-[80%]">
                    <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-widest block">
                      {displayCode ? `Ponencia: ${displayCode}` : item.location}
                    </span>
                    <h4 className="text-base font-bold leading-snug text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-300 text-xs leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      {isPdf ? (
                        <>
                          <FileText className="w-4 h-4" />
                          Ver Documento PDF
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          Ver Nota Completa
                        </>
                      )}
                    </span>
                    <div className="bg-cyan-600 p-2 rounded-full">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

              </a>
            </div>
          );
        })}
      </div>

      {/* PUNTOS INDICADORES EN MÓVILES */}
      <div className="flex justify-center items-center gap-2 mt-2 md:hidden">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToItem(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'w-6 bg-cyan-600' 
                : 'w-1.5 bg-zinc-300'
            }`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};