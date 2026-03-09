import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const Footer = () => {
  return (
    <div className="relative content-start box-border caret-transparent gap-x-0 flex flex-wrap gap-y-0 w-full p-0 md:p-2.5">
      <FooterLogo />
      <FooterColumn
        title="Nosotros"
        links={[
          {
            href: "/quienessomos",
            text: "Acerca de Nosotros",
          },
          {
            href: "/quienessomos#equipo",
            text: "Equipo",
          },
          {
            href: "https://www.cedes.unach.mx/index.php/convocatoria",
            text: "Convocatorias",
          },
        ]}
      />
      <FooterColumn
        title="Nuestro trabajo"
        links={[
          {
            href: "https://surestesostenible.org/nuestro-trabajo/#pro",
            text: "Proyectos y Programas",
          },
          { href: "https://surestesostenible.org/#impactos", text: "Impactos" },
          {
            href: "https://surestesostenible.org/creditos/",
            text: "Créditos de fotografías",
          },
        ]}
      />
      <FooterColumn
        title="Transparencia"
        links={[
          {
            href: "https://transparencia.unach.mx/",
            text: "Unidad de Tranparencia",
          },
        ]}
      />
      <FooterColumn
        title="Ayuda"
        links={[
          { href: "/contacto", text: "Contacto" },
          {
            href: "https://www.unach.mx/avisos-de-privacidad",
            text: "Avisos de Privacidad",
          },
        ]}
      />
    </div>
  );
};