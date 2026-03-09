export const Section = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-5 md:px-[0%]">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-5 md:flex-nowrap md:max-w-[min(100%,1140px)] md:py-[6%]">
        <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center">
          <div className="box-border caret-transparent h-full">
            <h2 className="text-black text-[25px] font-semibold box-border caret-transparent leading-[37.5px] font-plus_jakarta_sans md:text-[54px] md:leading-[81px]">
              <span className="text-cyan-500 text-[25px] box-border caret-transparent leading-[37.5px] md:text-[54px] md:leading-[81px]">
                Sustentabilidad, Territorio y Gobernanza
              </span>
              promueve{" "}
              <span className="text-lime-600 text-[25px] box-border caret-transparent leading-[37.5px] md:text-[54px] md:leading-[81px]">
                iniciativas{" "}
              </span>
              colaborativas y acciones integrales para alcanzar el{" "}
              <span className="text-lime-600 text-[25px] box-border caret-transparent leading-[37.5px] md:text-[54px] md:leading-[81px]">
                equilibrio
              </span>
              entre la conservación de la{" "}
              <span className="text-cyan-500 text-[25px] box-border caret-transparent leading-[37.5px] md:text-[54px] md:leading-[81px]">
                biodiversidad y el bienestar{" "}
              </span>
              humano
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};