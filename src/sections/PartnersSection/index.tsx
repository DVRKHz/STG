import { PartnerLogos } from "@/sections/PartnersSection/components/PartnerLogos";

export const PartnersSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-[0%]">
      <div className="box-border caret-transparent gap-x-0 flex grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-0 w-full mx-auto py-[6%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
        <PartnerLogos
          variant="grid-4"
          logos={[
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Logo-MAR-Fund-en-850px-1.png",
              alt: "",
              sizes: "(max-width: 160px) 100vw, 160px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-40",
            },
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/LOGO_FMCN_color_solo__png-1.png",
              alt: "",
              sizes: "(max-width: 188px) 100vw, 188px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-[188px]",
            },
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/1-1-1.jpg",
              alt: "",
              sizes: "(max-width: 157px) 100vw, 157px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-[157px]",
            },
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/SURESTE-LOGO-0-–-3-300x300.png",
              alt: "",
              sizes: "(max-width: 300px) 100vw, 300px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-[300px]",
            },
          ]}
        />
        <PartnerLogos
          variant="header"
          title="ALIADOS Y DONANTES"
          description="Gracias al apoyo generoso de nuestros aliados y donantes, avanzamos juntos hacia la conservación y el desarrollo sustentable de la región"
        />
        <PartnerLogos
          variant=""
          logos={[
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/SURESTE-LOGO-0-–-2-300x300.png",
              alt: "",
              sizes: "(max-width: 300px) 100vw, 300px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-[300px]",
            },
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/TNClogoPrimary_OU_RGB_Mexico-1.png",
              alt: "",
              sizes: "(max-width: 229px) 100vw, 229px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-[229px]",
            },
            {
              src: "https://c.animaapp.com/mlh7yfd1ocFTbj/assets/LOGO-CyR-01-1.png",
              alt: "",
              sizes: "(max-width: 224px) 100vw, 224px",
              className:
                "aspect-video box-border caret-transparent inline-block grayscale-[1] max-w-full object-contain w-56",
            },
          ]}
        />
      </div>
    </div>
  );
};