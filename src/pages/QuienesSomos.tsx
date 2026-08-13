import { useRef } from 'react';
import { Navbar } from "@/sections/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

/** Define los géneros soportados para el patrón de color del avatar */
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
  const scrollRefInvestigadores = useRef<HTMLDivElement>(null);
  const scrollRefColaboradores = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* 3.1 SECCIÓN HERO (PORTADA) */}
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

      {/* CONTENIDO PRINCIPAL */}
      <main className="container mx-auto px-6 py-12 md:py-24 max-w-5xl space-y-20 md:space-y-32">
        
        {/* 3.2 SECCIÓN MISIÓN Y VISIÓN */}
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

        {/* 3.3 SECCIÓN NUESTROS VALORES */}
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

        {/* 3.4 SECCIÓN EQUIPO DE TRABAJO MEJORADA */}
        <section id="equipo" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestro Equipo
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              Conoce al grupo de especialistas y colaboradores que hacen posible la misión de nuestra organización.
            </p>
          </div>

          {/* --- BLOQUE: INVESTIGADORES --- */}
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <h3 className="text-lg font-bold text-zinc-900 border-l-[4px] border-cyan-500 pl-3">
                Investigadores
              </h3>
              
              {/* Botones estilizados */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll(scrollRefInvestigadores, 'left')}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 active:scale-95 transition-all shadow-2xs"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll(scrollRefInvestigadores, 'right')}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 active:scale-95 transition-all shadow-2xs"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Carrusel con items-stretch para nivelar alturas de tarjetas */}
            <div 
              ref={scrollRefInvestigadores}
              className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 -mx-2 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {investigadores.map((person) => (
                <TeamMember 
                  key={person.name} 
                  name={person.name} 
                  role={person.role}
                  desc={person.desc}
                  gender={person.gender}
                  accentColor="cyan" 
                />
              ))}
            </div>
          </div>

          {/* --- BLOQUE: COLABORADORES --- */}
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <h3 className="text-lg font-bold text-zinc-900 border-l-[4px] border-lime-600 pl-3">
                Colaboradores
              </h3>
              
              {/* Botones estilizados */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll(scrollRefColaboradores, 'left')}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-lime-50 hover:text-lime-700 hover:border-lime-200 active:scale-95 transition-all shadow-2xs"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll(scrollRefColaboradores, 'right')}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-lime-50 hover:text-lime-700 hover:border-lime-200 active:scale-95 transition-all shadow-2xs"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Carrusel con items-stretch para nivelar alturas de tarjetas */}
            <div 
              ref={scrollRefColaboradores}
              className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 -mx-2 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {colaboradores.map((person) => (
                <TeamMember 
                  key={person.name} 
                  name={person.name} 
                  role={person.role}
                  desc={person.desc}
                  gender={person.gender}
                  accentColor="lime" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

// SUBCOMPONENTES REUTILIZABLES

const ValueItem = ({ color, title, desc }: { color: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start group">
    <span className={`${color} text-2xl transition-transform group-hover:scale-125`}>●</span>
    <div>
      <h3 className="text-lg font-bold mb-1 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

/**
 * Tarjeta moderna de miembro del equipo con diseño adaptativo de altura
 */
const TeamMember = ({
  name,
  role,
  desc,
  gender,
  accentColor,
}: {
  name: string;
  role: string;
  desc: string;
  gender: Gender;
  accentColor: "cyan" | "lime";
}) => {
  const sectionStyles = {
    cyan: {
      borderHover: "hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10",
      badge: "bg-cyan-50/90 text-cyan-800 border-cyan-200/80 backdrop-blur-xs",
      lineAccent: "group-hover:bg-cyan-500",
    },
    lime: {
      borderHover: "hover:border-lime-400 hover:shadow-lg hover:shadow-lime-500/10",
      badge: "bg-lime-50/90 text-lime-900 border-lime-200/80 backdrop-blur-xs",
      lineAccent: "group-hover:bg-lime-500",
    },
  }[accentColor];

  const genderAvatarStyles = gender === "male" 
    ? "bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border-blue-200/60 ring-4 ring-blue-50/50" 
    : "bg-gradient-to-br from-pink-50 to-rose-50 text-pink-600 border-pink-200/60 ring-4 ring-pink-50/50";

  return (
    <div className={`snap-start shrink-0 w-[280px] sm:w-[310px] h-full flex flex-col justify-between bg-gradient-to-b from-slate-50/50 via-white to-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs transition-all duration-300 group hover:-translate-y-1 ${sectionStyles.borderHover} relative overflow-hidden`}>
      {/* Detalle visual sutil en hover */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-transparent transition-colors duration-300 ${sectionStyles.lineAccent}`} />

      <div className="space-y-4">
        {/* Cabecera de tarjeta */}
        <div className="flex items-center justify-between gap-3">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${genderAvatarStyles}`}>
            <User className="w-5 h-5 stroke-[2.2]" />
          </div>
          
          <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs ${sectionStyles.badge}`}>
            {role}
          </span>
        </div>

        {/* Nombre y descripción dinámica */}
        <div className="space-y-2 pt-1">
          <h4 className="text-base font-bold text-zinc-900 leading-snug tracking-tight group-hover:text-black transition-colors">
            {name}
          </h4>
          <p className="text-xs text-zinc-600 leading-relaxed font-normal">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};