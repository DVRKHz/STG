import { useState, ChangeEvent, FormEvent, useRef, DragEvent } from "react";
import { Navbar } from "@/sections/Navbar";
import { FooterSection } from "@/sections/FooterSection";

// --- TIPOS E INTERFACES ---
interface FormDataState {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface StatusState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const Contacto = () => {
  const [formData, setFormData] = useState<FormDataState>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<StatusState>({ 
    loading: false, 
    success: false, 
    error: null 
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (selectedFile: File | undefined) => {
    if (!selectedFile) return;
    
    // Validar tamaño máximo de archivo (ejemplo: 10MB)
    const MAX_SIZE_MB = 10;
    if (selectedFile.size > MAX_SIZE_MB * 1024 * 1024) {
      setStatus(prev => ({ 
        ...prev, 
        error: `El archivo supera el límite permitido de ${MAX_SIZE_MB} MB.` 
      }));
      return;
    }

    setStatus(prev => ({ ...prev, error: null }));
    setFile(selectedFile);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const resetForm = () => {
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => 
      dataToSend.append(key, formData[key as keyof FormDataState])
    );
    
    if (file) dataToSend.append("adjunto", file);

    try {
      const response = await fetch("https://formspree.io/f/xoevrpvz", {
        method: "POST",
        body: dataToSend,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        resetForm();
      } else {
        const data = await response.json();
        throw new Error(data.error || "No se pudo enviar el mensaje. Por favor revisa los campos e intentalo de nuevo.");
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Ocurrió un error inesperado al enviar el formulario.";
      setStatus({ loading: false, success: false, error: errorMessage });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-plus_jakarta_sans selection:bg-cyan-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden group">
        <div 
          className="absolute inset-0 bg-gray-800 transition-transform duration-[2000ms] ease-out group-hover:scale-105 blur-[2px]"
          style={{
            backgroundImage: "url('/contacto-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-cyan-400 mx-auto mb-4 rounded-full" />
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
            Contacto
          </h1>
          <p className="text-zinc-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light italic">
            "Estamos aquí para escucharte y colaborar contigo"
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Formulario / Success View */}
          <section className="order-2 lg:order-1 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
            <h2 className="text-cyan-700 text-xs md:text-sm font-bold tracking-[3px] uppercase mb-6">
              Envíanos un mensaje
            </h2>
            
            {status.success ? (
              <div className="bg-cyan-50/60 border border-cyan-200 p-8 md:p-10 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">¡Mensaje Enviado!</h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-md mx-auto">
                  Gracias por comunicarte con nosotros. Hemos recibido tu mensaje y nuestro equipo te responderá a la brevedad.
                </p>
                <button 
                  type="button"
                  onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                  className="mt-4 inline-flex items-center gap-2 text-cyan-700 font-bold hover:text-cyan-800 text-xs uppercase tracking-wider py-2 px-4 rounded-lg bg-white border border-cyan-200 shadow-2xs hover:bg-cyan-50 transition-all cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status.error && (
                  <div role="alert" className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs md:text-sm flex items-start gap-3 rounded-r-lg">
                    <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Error:</strong> {status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField 
                    label="Nombre completo *" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    placeholder="Ej. María Elena Pérez" 
                    required 
                  />
                  <InputField 
                    label="Correo electrónico *" 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="tu@correo.com" 
                    required 
                  />
                </div>

                <InputField 
                  label="Asunto *" 
                  id="asunto" 
                  name="asunto" 
                  value={formData.asunto} 
                  onChange={handleChange} 
                  placeholder="¿Sobre qué tema deseas colaborar o consultar?" 
                  required 
                />

                {/* Zona de Carga de Archivos (Drag & Drop UX) */}
                <div className="space-y-1.5">
                  <label htmlFor="adjunto" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Adjuntar Archivo (Opcional)
                  </label>
                  
                  <input
                    id="adjunto"
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!file ? (
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                        isDragging 
                          ? 'border-cyan-500 bg-cyan-50/50' 
                          : 'border-zinc-200 hover:border-cyan-400 hover:bg-zinc-50/50'
                      }`}
                    >
                      <svg className="w-8 h-8 mx-auto text-zinc-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-xs text-zinc-600 font-medium">
                        <span className="text-cyan-600 font-bold">Haz clic para subir</span> o arrastra un archivo aquí
                      </p>
                      <p className="text-[10px] text-zinc-400 mt-1">PDF, DOCX, PNG o JPG (Máx. 10MB)</p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3.5 bg-cyan-50/80 border border-cyan-200 rounded-xl text-xs">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <svg className="w-5 h-5 text-cyan-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        <span className="font-semibold text-zinc-800 truncate">{file.name}</span>
                        <span className="text-zinc-500 shrink-0">({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700 font-bold text-xs p-1 rounded hover:bg-red-50 transition-colors"
                        aria-label="Eliminar archivo"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                    placeholder="Escribe los detalles de tu consulta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md active:scale-[0.99] disabled:bg-zinc-400 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed text-sm"
                >
                  {status.loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </section>

          {/* Información Lateral de Contacto */}
          <section className="order-1 lg:order-2 space-y-6 lg:sticky lg:top-24">
            <div>
              <h2 className="text-lime-700 text-xs md:text-sm font-bold tracking-[3px] uppercase mb-2">
                Información Directa
              </h2>
              <p className="text-zinc-600 text-sm">
                Puedes comunicarte directamente a través de nuestras vías oficiales o visitarnos en nuestras instalaciones.
              </p>
            </div>
            
            <div className="space-y-4">
              <ContactInfoCard 
                icon={<MailIcon />} 
                title="Correo Electrónico" 
                content={
                  <div className="flex flex-col gap-1 text-xs md:text-sm">
                    <a href="mailto:msilva@unach.com" className="text-cyan-700 font-medium hover:underline">msilva@unach.com</a>
                    <a href="mailto:carolina.farrera@unach.com" className="text-cyan-700 font-medium hover:underline">carolina.farrera@unach.com</a>
                  </div>
                } 
              />

              <ContactInfoCard 
                icon={<MapIcon />} 
                title="Ubicación" 
                content={
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      Esquina de las Calles Laureles y Orquidea No. 192, Jardines de Tuxtla, C.P. 29020. Tuxtla Gutiérrez, Chiapas, México.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/cJ5UoMGNrA3pWXK89" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 hover:underline"
                    >
                      <span>Ver en Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                } 
              />

              <ContactInfoCard 
                icon={<FBIcon />} 
                title="Comunidad en Redes" 
                content={
                  <a 
                    href="https://www.facebook.com/profile.php?id=61587006117007" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-700 hover:text-blue-600 transition-colors"
                  >
                    <span>Síguenos en Facebook</span>
                  </a>
                } 
              />
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

// --- SUB-COMPONENTES ---

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField = ({ label, id, ...props }: InputFieldProps) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-zinc-700">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
    />
  </div>
);

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoCard = ({ icon, title, content }: ContactCardProps) => (
  <div className="flex gap-4 p-5 bg-zinc-50/80 rounded-2xl border border-zinc-200/70 hover:border-cyan-200 transition-all">
    <div className="text-cyan-700 shrink-0 p-2.5 bg-white rounded-xl border border-zinc-200/60 shadow-2xs">
      {icon}
    </div>
    <div className="space-y-1">
      <h3 className="font-bold text-zinc-900 text-sm">{title}</h3>
      <div>{content}</div>
    </div>
  </div>
);

// --- ICONOS ---
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const MapIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FBIcon = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 14.991 22 12z" /></svg>;