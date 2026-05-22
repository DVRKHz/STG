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
        <section id="equipo" className="space-y-8">
          <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
            Nuestro Equipo
          </h2>

          {/* Investigadores */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900 border-l-[3px] border-cyan-500 pl-4 rounded-none">
              Investigadores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Dr. Moisés Silva Cervantes",
                "Dra. Elisa Cruz Ruedas",
                "Dr. Franco Escamirosa Montalvo",
                "Mtra. Carolina Farrera Gutiérrez",
                "Mtra. Joseliny Díaz Torres",
                "Mtro. Francisco Tavernier Montes",
              ].map((name) => (
                <TeamMember key={name} name={name} accentColor="cyan" />
              ))}
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* Colaboradores */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900 border-l-[3px] border-lime-600 pl-4 rounded-none">
              Colaboradores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "César Emilio Gómez Morales",
                "Shamary Guadalupe Vázquez Gutiérrez",
                "María Verónica García Ronquillo",
                "Jessica Hernández Méndez",
                "Mario Alberto Vargas Gómez",
                "Jared Moisés Pérez Espinoza",
                "Cristóbal Pérez González",
                "André Rodrigo Martínez Martínez",
              ].map((name) => (
                <TeamMember key={name} name={name} accentColor="lime" />
              ))}
            </div>
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

const TeamMember = ({
  name,
  accentColor,
}: {
  name: string;
  accentColor: "cyan" | "lime";
}) => {
  const initials = name
    .replace(/^(Dr\.|Dra\.|Mtro\.|Mtra\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  const styles = {
    cyan: { avatar: "bg-cyan-50 text-cyan-700" },
    lime: { avatar: "bg-lime-50 text-lime-800" },
  }[accentColor];

  return (
    <div className="flex items-center gap-3 bg-white border border-zinc-100 rounded-2xl px-4 py-3 hover:border-zinc-200 transition-colors">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${styles.avatar}`}
      >
        {initials}
      </div>
      <span className="text-sm font-medium text-zinc-800 leading-snug">
        {name}
      </span>
    </div>
  );
};