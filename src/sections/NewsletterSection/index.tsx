import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <div className="relative bg-pink-600 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[15px] md:flex-nowrap md:max-w-[min(100%,1140px)]">
        <div className="relative self-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap justify-center gap-y-5 w-full p-2.5 md:flex-nowrap md:w-6/12">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center w-full md:text-left">
            <div className="box-border caret-transparent h-full text-center m-[0%] md:text-left">
              <div className="text-white text-[25px] font-semibold box-border caret-transparent leading-[25px] text-center font-plus_jakarta_sans md:text-left">
                Suscríbete a nuestras noticias
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center w-full md:text-left">
            <div className="box-border caret-transparent h-full text-center m-[0%] md:text-left">
              <div className="text-white text-lg font-extralight box-border caret-transparent leading-[18px] text-center font-plus_jakarta_sans md:text-left">
                Si estás interesado/a en conocer más acerca de SSAC suscríbete
                aquí
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-end box-border caret-transparent gap-x-[15px] flex flex-col flex-wrap justify-center gap-y-[15px] w-full p-2.5 md:flex-nowrap">
          <div className="relative box-border caret-transparent gap-x-[15px] max-w-full gap-y-[15px] w-full">
            <div className="box-border caret-transparent h-full p-[0%] md:p-0">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};