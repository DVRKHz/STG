import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image con Overlay */}
        <div 
          className="absolute inset-0 bg-gray-800 bg-[url('/quienessomos-hero.jpg')] bg-cover bg-center transition-transform duration-700 hover:scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            Quiénes Somos
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-12 md:py-24 max-w-5xl space-y-20 md:space-y-32">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <article className="space-y-4">
            <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Promover la sostenibilidad y resiliencia en el Sureste de México y el Sistema Arrecifal Mesoamericano mediante iniciativas colaborativas y acciones integrales que equilibren la conservación de la biodiversidad con el bienestar humano.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-lime-600 text-sm md:text-base font-bold tracking-[3px] uppercase">
              Nuestra Visión
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-700">
              Ser una organización líder reconocida por su capacidad de articular esfuerzos colaborativos que generen impactos positivos y duraderos en la conservación de la biodiversidad y el bienestar de las comunidades locales.
            </p>
          </article>
        </div>

        {/* Values Section */}
        <section className="space-y-12">
          <h2 className="text-blue-900 text-sm md:text-base font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <ValueItem color="text-cyan-500" title="Colaboración" desc="Trabajamos en alianza con diversos actores para lograr objetivos comunes." />
            <ValueItem color="text-lime-600" title="Sostenibilidad" desc="Promovemos prácticas que aseguren el equilibrio entre desarrollo y conservación." />
            <ValueItem color="text-pink-600" title="Transparencia" desc="Operamos con honestidad y rendición de cuentas en todas nuestras acciones." />
            <ValueItem color="text-blue-900" title="Innovación" desc="Buscamos soluciones creativas y efectivas para los desafíos ambientales." />
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="space-y-12 pb-10">
          <h2 className="text-cyan-500 text-sm md:text-base font-bold tracking-[3px] uppercase text-center md:text-left">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <TeamMember 
              name="Nombre del Miembro" 
              role="Director/a Ejecutivo/a" 
              img="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-1-1.jpg" 
            />
            <TeamMember 
              name="Nombre del Miembro" 
              role="Coordinador/a de Proyectos" 
              img="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-2-2-1-1024x680.jpg" 
            />
            <TeamMember 
              name="Nombre del Miembro" 
              role="Especialista en Conservación" 
              img="https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-Ian-Drysdale-1024x768.jpg" 
            />
          </div>
        </section>
      </main>

      <ReportSection />
    </div>
  );
};

// Sub-componentes para limpiar el código principal
const ValueItem = ({ color, title, desc }) => (
  <div className="flex gap-4 items-start group">
    <span className={`${color} text-2xl transition-transform group-hover:scale-125`}>●</span>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TeamMember = ({ name, role, img }) => (
  <div className="group space-y-4">
    <div className="overflow-hidden rounded-lg bg-gray-100">
      <img
        src={img}
        alt={name}
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-zinc-500">{role}</p>
    </div>
  </div>
);