import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { ReportSection } from "@/sections/ReportSection";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const dataToSend = new FormData();
    Object.keys(formData).forEach(key => dataToSend.append(key, formData[key]));
    if (file) dataToSend.append("adjunto", file);

    try {
      const response = await fetch("https://formspree.io/f/xqeypdbr", {
        method: "POST",
        body: dataToSend,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null});
        setFormData({ nombre: "", email: "", asunto: "", mensaje: ""});
        setFile(null);
        alert("¡Mensaje enviado con éxito!");
      } else {
        const data = await response.json();
        throw new Error(data.error || "Error al enviar");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gray-800 bg-[url('/contacto-hero.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">Contacto</h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para escucharte y colaborar contigo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Formulario */}
          <section className="order-2 lg:order-1">
            <h2 className="text-cyan-600 text-sm font-bold tracking-[3px] uppercase mb-8">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField label="Nombre *" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
                <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Adjuntar Archivo (Opcional)</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 transition-all border border-zinc-200 rounded-md p-1"
                />
              </div>

              <InputField label="Asunto *" name="asunto" value={formData.asunto} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" required />

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg active:scale-[0.98] disabled:bg-zinc-400 flex items-center justify-center gap-3"
              >
                {status.loading ? "Enviando..." : "Enviar Mensaje"}
                {!status.loading && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </section>

          {/* Info de Contacto */}
          <section className="order-1 lg:order-2 space-y-10 lg:sticky lg:top-24">
            <h2 className="text-lime-700 text-sm font-bold tracking-[3px] uppercase">
              Información de contacto
            </h2>
            
            <div className="space-y-6">
              <ContactInfoCard 
                icon={<MailIcon />} 
                title="Email" 
                content={
                  <div className="flex flex-col gap-1">
                    <a href="mailto:msilva@unach.com" className="text-cyan-600 hover:underline">msilva@unach.com</a>
                    <a href="mailto:carolina.farrera@unach.com" className="text-cyan-600 hover:underline">carolina.farrera@unach.com</a>
                  </div>
                } 
              />
              <ContactInfoCard 
                icon={<MapIcon />} 
                title="Ubicación" 
                content="Esquina de las Calles Laureles y Orquidea No. 192, Jardines de Tuxtla, 29020. Tuxtla Gutiérrez, Chiapas." 
              />
              <ContactInfoCard 
                icon={<FBIcon />} 
                title="Redes Sociales" 
                content={
                  <a href="https://www.facebook.com/profile.php?id=61587006117007" target="_blank" className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors">
                    <span>Síguenos en Facebook</span>
                  </a>
                } 
              />
            </div>
          </section>
        </div>
      </main>

      <ReportSection />
    </div>
  );
};

// Componentes Auxiliares
const InputField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-zinc-700">{label}</label>
    <input
      {...props}
      className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
    />
  </div>
);

const ContactInfoCard = ({ icon, title, content }) => (
  <div className="flex gap-5 p-6 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-cyan-200 transition-all">
    <div className="text-cyan-600">{icon}</div>
    <div>
      <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
      <div className="text-zinc-600 text-sm leading-relaxed">{content}</div>
    </div>
  </div>
);

const MailIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const MapIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FBIcon = () => <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 14.991 22 12z" /></svg>;