import { TestimonialSlide } from "@/sections/TestimonialsSection/components/TestimonialSlide";

export const TestimonialCarousel = () => {
  return (
    <div
      role="region"
      aria-label="Carousel"
      className="relative box-border caret-transparent flex list-none z-[1] overflow-hidden mx-auto"
    >
      <div className="relative caret-transparent flex h-full translate-x-[-1155px] w-full z-[1] md:translate-x-[-3450px]">
        <TestimonialSlide
          ariaLabel="5 / 5"
          testimonialText="Hemos establecido contacto con Sureste Sostenible y estamos colaborando estrechamente con Alianza Kana Kay (AKK) y Kaanbal Suut. Desde el inicio, hemos trabajado en equipo en el proyecto de pesca sustentable, desarrollando diversas capacitaciones que han beneficiado significativamente a nuestra comunidad. La Zona de Refugio Pesquero es un esfuerzo conjunto de toda la comunidad y gracias a Sureste Sostenible tenemos la fortaleza para seguir adelante."
          authorName="Santiago Puch Salazar "
          programName="Programa Alianza Kanan Kay  y Kaanbal Suut"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/AGO-2024-ZRP-Punta-del-Tigre-Santiago-Puch-Salazar_-Luis-Quijano-2-1-1024x766.jpg"
        />
        <TestimonialSlide
          ariaLabel="1 / 5"
          testimonialText={
            <>
              El programa de Liderazgo SAM ha sido una experiencia fenomenal.
              <br />
              Interactuar entre un grupo tan motivado y emprendiendo tantas
              iniciativas para ayudar a las poblaciones locales y el medio
              ambiente ha sido realmente enriquecedor.
            </>
          }
          authorName="Andrea Rivera-Sosa, Quintana Roo, México"
          programName="Programa de Liderazgo SAM"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Andrea-Rivera-1-1024x683.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
        <TestimonialSlide
          ariaLabel="2 / 5"
          testimonialText="El programa superó por mucho mis expectativas! Tuvimos oportunidad de revisar temas muy diversos y enriquecedores, que no solo nos dieron herramientas de trabajo, sino que nos ayudaron a ser mejores personas."
          authorName="Claudia Padilla, Quintana Roo, México"
          programName="Programa de Liderazgo SAM"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Claudia-1-1-1024x682.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
        <TestimonialSlide
          ariaLabel="3 / 5"
          testimonialText="El quehacer de las organizaciones civiles resulta un proceso incierto, gracias a Kaanbal Suut desarrollamos herramientas y adoptamos enfoques que nos permiten visualizar una dirección."
          authorName="Rodrigo López, Yucatán, México"
          programName="Programa Kaanbal Suut"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Rodrigo-Lopez-1024x677.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
        <TestimonialSlide
          ariaLabel="4 / 5"
          testimonialText="El programa Kaanbal Suut es muy diferente a otras formaciones que he tomado, ya que al integrarnos en una comunidad se crean lazos de colaboración, amistad y alianzas. Queremos seguir siendo parte de esta magnífica comunidad."
          authorName="Ricardo Ruiz, Yucatán, México"
          programName="Programa Kaanbal Suut"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Ricardo-Ruiz-1-e1724195139899-1024x780.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
        <TestimonialSlide
          ariaLabel="5 / 5"
          testimonialText="Hemos establecido contacto con Sureste Sostenible y estamos colaborando estrechamente con Alianza Kana Kay (AKK) y Kaanbal Suut. Desde el inicio, hemos trabajado en equipo en el proyecto de pesca sustentable, desarrollando diversas capacitaciones que han beneficiado significativamente a nuestra comunidad. La Zona de Refugio Pesquero es un esfuerzo conjunto de toda la comunidad y gracias a Sureste Sostenible tenemos la fortaleza para seguir adelante."
          authorName="Santiago Puch Salazar "
          programName="Programa Alianza Kanan Kay  y Kaanbal Suut"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/AGO-2024-ZRP-Punta-del-Tigre-Santiago-Puch-Salazar_-Luis-Quijano-2-1-1024x766.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
        <TestimonialSlide
          ariaLabel="1 / 5"
          testimonialText={
            <>
              El programa de Liderazgo SAM ha sido una experiencia fenomenal.
              <br className="box-border caret-transparent" />
              Interactuar entre un grupo tan motivado y emprendiendo tantas
              iniciativas para ayudar a las poblaciones locales y el medio
              ambiente ha sido realmente enriquecedor.
            </>
          }
          authorName="Andrea Rivera-Sosa, Quintana Roo, México"
          programName="Programa de Liderazgo SAM"
          imageUrl="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Andrea-Rivera-1-1024x683.jpg"
          imageAlt=""
          imageSizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
    </div>
    );
};