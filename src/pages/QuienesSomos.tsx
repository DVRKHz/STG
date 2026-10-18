import { useRef, useState, useEffect, useCallback } from 'react';
import { Navbar } from "@/sections/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

/** Define los géneros soportados para accesibilidad y metadatos */
type Gender = "male" | "female";

/** Estructura de datos para los miembros del equipo */
interface Person {
  name: string;
  role: string;
  desc: string;
  gender: Gender;
}

/** Lista de Investigadores */
const investigadores: Person[] = [
  {
    name: "Dr. Moisés Silva Cervantes",
    role: "Investigador",
    desc: "Especialista en ecología tropical y gestión ambiental del territorio.",
    gender: "male",
  },
  {
    name: "Dra. Elisa Cruz Ruedas",
    role: "Investigadora",
    desc: "Enfocada en conservación de biodiversidad y desarrollo comunitario.",
    gender: "female",
  },
  {
    name: "Dr. Franco Escamirosa Montalvo",
    role: "Investigador",
    desc: "Líder en modelos de resiliencia hídrica y cambio climático.",
    gender: "male",
  },
  {
    name: "Mtra. Carolina Farrera Gutiérrez",
    role: "Investigadora",
    desc: "Especialista en análisis de datos socioambientales y GIS.",
    gender: "female",
  },
  {
    name: "Mtra. Joseliny Díaz Torres",
    role: "Investigadora",
    desc: "Investigadora en políticas públicas y gobernanza ambiental.",
    gender: "female",
  },
  {
    name: "Mtro. Francisco Tavernier Montes",
    role: "Investigador",
    desc: "Experto en economía ecológica y proyectos sostenibles.",
    gender: "male",
  },
];

/** Lista de Colaboradores */
const colaboradores: Person[] = [
  {
    name: "César Emilio Gómez Morales",
    role: "Colaborador",
    desc: "Apoyo técnico en monitoreo de campo y sistematización.",
    gender: "male",
  },
  {
    name: "Shamary Guadalupe Vázquez Gutiérrez",
    role: "Colaboradora",
    desc: "Coordinación y vinculación con comunidades locales.",
    gender: "female",
  },
  {
    name: "María Verónica García Ronquillo",
    role: "Colaboradora",
    desc: "Gestión documental y apoyo a proyectos de investigación.",
    gender: "female",
  },
  {
    name: "Jessica Hernández Méndez",
    role: "Colaboradora",
    desc: "Diseño y comunicación de estrategias de difusión ambiental.",
    gender: "female",
  },
  {
    name: "Mario Alberto Vargas Gómez",
    role: "Colaborador",
    desc: "Soporte en análisis de datos cartográficos y geográficos.",
    gender: "male",
  },
  {
    name: "Jared Moisés Pérez Espinoza",
    role: "Colaborador",
    desc: "Asistencia en logística e implementación de talleres.",
    gender: "male",
  },
  {
    name: "Cristóbal Pérez González",
    role: "Colaborador",
    desc: "Análisis, interpretación y gestión de datos del proyecto.",
    gender: "male",
  },
  {
    name: "André Rodrigo Martínez Martínez",
    role: "Colaborador",
    desc: "Desarrollador Front-end. Diseño e implementación de la interfaz web, componentes interactivos y experiencia de usuario.",
    gender: "male",
  },
];

export const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* SECCIÓN HERO (PORTADA) */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden group">
        <div 
          className="absolute inset-0 bg-gray-800 transition-transform duration-[2000ms] ease-out group-hover:scale-105 blur-[2px]"
          style={{
            backgroundImage: "url('/quienessomos-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
            Quiénes Somos
          </h1>
          <p className="text-zinc-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light italic">
            "Conoce más sobre nuestro equipo y nuestra misión"
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-5xl space-y-20 md:space-y-28">
        
        {/* SECCIÓN MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <article className="space-y-3 border-l-4 border-cyan-500 pl-6 py-1">
            <h2 className="text-cyan-600 text-xs md:text-sm font-bold tracking-[3px] uppercase">
              Nuestra Misión
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-700">
              Promover la sostenibilidad y resiliencia en el Sureste de México a través de la investigación aplicada, el fortalecimiento de capacidades comunitarias y la articulación de políticas ambientales efectivas.
            </p>
          </article>

          <article className="space-y-3 border-l-4 border-lime-600 pl-6 py-1">
            <h2 className="text-lime-700 text-xs md:text-sm font-bold tracking-[3px] uppercase">
              Nuestra Visión
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-700">
              Ser una organización líder reconocida por su capacidad de articular esfuerzos científicos, comunitarios e institucionales para afrontar los desafíos climáticos del siglo XXI.
            </p>
          </article>
        </div>

        {/* SECCIÓN NUESTROS VALORES */}
        <section className="space-y-8">
          <h2 className="text-zinc-900 text-xs md:text-sm font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            <ValueItem color="text-cyan-500" title="Colaboración" desc="Trabajamos en alianza con diversos actores sociales y académicos." />
            <ValueItem color="text-lime-600" title="Sostenibilidad" desc="Promovemos prácticas que aseguren el equilibrio ecológico a largo plazo." />
            <ValueItem color="text-emerald-600" title="Transparencia" desc="Operamos con honestidad, rigor técnico y rendición de cuentas." />
            <ValueItem color="text-cyan-700" title="Innovación" desc="Buscamos soluciones creativas y adaptadas al contexto regional." />
          </div>
        </section>

        {/* SECCIÓN EQUIPO DE TRABAJO */}
        <section id="equipo" className="scroll-mt-24 space-y-12">
          <div className="space-y-2 border-b border-zinc-100 pb-4">
            <h2 className="text-cyan-600 text-xs md:text-sm font-bold tracking-[3px] uppercase">
              Nuestro Equipo
            </h2>
            <p className="text-zinc-600 text-sm max-w-xl">
              Conoce al grupo de especialistas y colaboradores que impulsan las iniciativas de nuestra organización.
            </p>
          </div>

          {/* BLOQUE: INVESTIGADORES */}
          <TeamSectionCarousel 
            title="Investigadores" 
            accentColor="cyan" 
            members={investigadores} 
          />

          {/* BLOQUE: COLABORADORES */}
          <TeamSectionCarousel 
            title="Colaboradores" 
            accentColor="lime" 
            members={colaboradores} 
          />
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

// SUBCOMPONENTES REUTILIZABLES

const ValueItem = ({ color, title, desc }: { color: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start group">
    <span className={`${color} text-xl transition-transform group-hover:scale-125 select-none`}>●</span>
    <div>
      <h3 className="text-base font-bold mb-1 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

/** Componente de carrusel interactivo con estados de scroll deshabilitados */
const TeamSectionCarousel = ({ 
  title, 
  accentColor, 
  members 
}: { 
  title: string; 
  accentColor: "cyan" | "lime"; 
  members: Person[] 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [checkScroll]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  const borderColor = accentColor === "cyan" ? "border-cyan-500" : "border-lime-600";

  return (
    <div className="space-y-4" role="region" aria-label={`Carrusel de ${title}`}>
      <div className="flex items-center justify-between pb-2">
        <h3 className={`text-base font-bold text-zinc-900 border-l-4 ${borderColor} pl-3`}>
          {title}
        </h3>
        
        {/* Botones de navegación controlados */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-xl border transition-all ${
              canScrollLeft 
                ? 'border-zinc-200 text-zinc-700 hover:bg-zinc-100 active:scale-95 cursor-pointer' 
                : 'border-zinc-100 text-zinc-300 cursor-not-allowed opacity-50'
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-xl border transition-all ${
              canScrollRight 
                ? 'border-zinc-200 text-zinc-700 hover:bg-zinc-100 active:scale-95 cursor-pointer' 
                : 'border-zinc-100 text-zinc-300 cursor-not-allowed opacity-50'
            }`}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contenedor del Carrusel */}
      <div 
        ref={scrollRef}
        className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 -mx-2 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {members.map((person) => (
          <TeamMember 
            key={person.name} 
            name={person.name} 
            role={person.role}
            desc={person.desc}
            accentColor={accentColor} 
          />
        ))}
      </div>
    </div>
  );
};

/** Tarjeta estandarizada de miembro del equipo */
const TeamMember = ({
  name,
  role,
  desc,
  accentColor,
}: {
  name: string;
  role: string;
  desc: string;
  accentColor: "cyan" | "lime";
}) => {
  const styles = accentColor === "cyan" ? {
    borderHover: "hover:border-cyan-300 hover:shadow-md",
    badge: "team-role-cyan bg-cyan-50 text-cyan-800 border-cyan-200",
    avatar: "bg-cyan-50 text-cyan-700 border-cyan-200",
    topLine: "group-hover:bg-cyan-500",
  } : {
    borderHover: "hover:border-lime-300 hover:shadow-md",
    badge: "team-role-lime bg-lime-50 text-lime-900 border-lime-200",
    avatar: "bg-lime-50 text-lime-800 border-lime-200",
    topLine: "group-hover:bg-lime-500",
  };

  return (
    <div className={`snap-start shrink-0 w-[270px] sm:w-[300px] flex flex-col justify-between bg-white border border-zinc-200 rounded-2xl p-5 transition-all duration-300 group hover:-translate-y-1 ${styles.borderHover} relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-transparent transition-colors duration-300 ${styles.topLine}`} />

      <div className="space-y-4">
        {/* Header con avatar e insignia */}
        <div className="flex items-center justify-between gap-2">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${styles.avatar}`}>
            <User className="w-5 h-5 stroke-[2]" />
          </div>
          
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${styles.badge}`}>
            {role}
          </span>
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-cyan-700 transition-colors">
            {name}
          </h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};