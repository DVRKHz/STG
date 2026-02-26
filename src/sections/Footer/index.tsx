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
            href: "https://surestesostenible.org/nosotros/",
            text: "Acerca de Nosotros",
          },
          {
            href: "https://surestesostenible.org/nosotros/#equipo",
            text: "Equipo",
          },
          {
            href: "https://surestesostenible.org/convocatorias/",
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
            href: "https://drive.google.com/file/d/1bk5w4sgg3OQL2782O9KmPWX7xNzIpivF/view",
            text: "Manual de Operaciones",
          },
        ]}
      />
      <FooterColumn
        title="Ayuda"
        links={[
          { href: "https://surestesostenible.org/contacto/", text: "Contacto" },
          {
            href: "https://surestesostenible.org/aviso-de-privacidad/",
            text: "Política de Privacidad",
          },
        ]}
      />
    </div>
  );
};