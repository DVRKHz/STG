import { useRef } from 'react';
import { Navbar } from "@/sections/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const QuienesSomos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* SECCIÓN HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden group">
        <div 
          className="absolute inset-0 bg-gray-800 transition-transform duration-[2000ms] ease-out group-hover:scale-110 blur-sm"
          style={{
            backgroundImage: "url('/quienessomos-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full animate-pulse" />
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
            Quiénes Somos
          </h1>
          <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
            "Conoce más sobre nosotros"
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 md:py-24 max-w-5xl space-y-20 md:space-y-32">
        
        {/* MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <article className="space-y-4 border-l-4 border-cyan-500 pl-6">
            <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Promover la sostenibilidad y resiliencia en el Sureste de México...
            </p>
          </article>

          <article className="space-y-4 border-l-4 border-lime-600 pl-6">
            <h2 className="text-lime-600 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Visión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Ser una organización líder reconocida por su capacidad de articular esfuerzos...
            </p>
          </article>
        </div>

        {/* VALORES */}
        <section className="space-y-12">
          <h2 className="text-blue-900 text-sm md:text-base font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <ValueItem color="text-cyan-500" title="Colaboración" desc="Trabajamos en alianza con diversos actores..." />
            <ValueItem color="text-lime-600" title="Sostenibilidad" desc="Promovemos prácticas que aseguren el equilibrio..." />
            <ValueItem color="text-pink-600" title="Transparencia" desc="Operamos con honestidad y rendición de cuentas..." />
            <ValueItem color="text-blue-900" title="Innovación" desc="Buscamos soluciones creativas y efectivas..." />
          </div>
        </section>

        {/* SECCIÓN EQUIPO */}
        <section id="equipo" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
                Nuestro Equipo
              </h2>
              <p className="text-zinc-500 text-sm hidden md:block italic">Pasa el cursor o usa el tabulador para conocer más.</p>
            </div>
            
            <div className="flex gap-2 self-end">
              <button 
                onClick={() => scroll('left')}
                className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-colors active:scale-90"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-colors active:scale-90"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-2 px-2"
          >
            <TeamMember 
              name="Ana García" 
              role="Directora" 
              img="/team1.jpg" 
              bio="Líder estratega con enfoque en gestión de fondos internacionales y alianzas gubernamentales con más de 15 años de experiencia."
            />
            <TeamMember 
              name="Carlos Ruíz" 
              role="Coordinador" 
              img="/team2.jpg" 
              bio="Experta en trabajo de campo y desarrollo de resiliencia comunitaria en zonas costeras del sureste mexicano."
            />
            <TeamMember 
              name="Elena Pons" 
              role="Especialista" 
              img="/team3.jpg" 
              bio="Analista de datos climáticos enfocado en la implementación de soluciones basadas en la naturaleza para la adaptación."
            />
            <TeamMember 
              name="Luis Pérez" 
              role="Especialista" 
              img="/team4.jpg" 
              bio="Especialista en comunicación para el cambio social, diseño de narrativas de sostenibilidad y participación comunitaria."
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

const ValueItem = ({ color, title, desc }: { color: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start group">
    <span className={`${color} text-2xl transition-transform group-hover:scale-125`}>●</span>
    <div>
      <h3 className="text-lg font-bold mb-1 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const TeamMember = ({ name, role, img, bio }: { name: string; role: string; img: string; bio: string }) => (
  <div 
    className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[30%] snap-center group outline-none"
    tabIndex={0}
  >
    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-100 shadow-md transition-all duration-500 group-hover:shadow-2xl group-focus-within:ring-4 group-focus-within:ring-cyan-500/30">
      
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-focus-within:scale-110 group-focus-within:blur-[2px]"
      />
      
      {/* Overlay que se oscurece más en hover para leer mejor la bio */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-zinc-900/90 transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {/* Contenedor con ligero movimiento hacia arriba al activar */}
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
          <h3 className="text-xl md:text-2xl font-bold leading-tight">
            {name}
          </h3>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-300 mt-1">
            {role}
          </p>
          
          <div className="max-h-0 group-hover:max-h-40 group-focus-within:max-h-40 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pt-0 group-hover:pt-4 group-focus-within:pt-4 border-t border-white/20 mt-0 group-hover:mt-4 group-focus-within:mt-4">
            <p className="text-zinc-100 text-sm leading-relaxed line-clamp-4">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);