export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[0%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
      <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center">
        <div className="box-border caret-transparent h-full">
          <h1 className="text-white text-[40px] font-semibold box-border caret-transparent leading-10 font-plus_jakarta_sans md:text-7xl md:leading-[72px]">
            Promoviendo la sostenibilidad y resiliencia
          </h1>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10 text-center">
        <div className="box-border caret-transparent h-full">
          <span className="text-white text-[21px] box-border caret-transparent leading-[21px] font-plus_jakarta_sans md:text-[29px] md:leading-[29px]">
            en el Sureste de México y el Sistema Arrecifal Mesoamericano
          </span>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10">
        <div className="box-border caret-transparent h-full">
          <div className="box-border caret-transparent">
            <a
              href="https://surestesostenible.org/nosotros/"
              className="text-white text-[15px] font-medium bg-cyan-500 box-border caret-transparent inline-block fill-white leading-[15px] text-center capitalize px-[35px] py-[15px] font-plus_jakarta_sans"
            >
              <span className="box-border caret-transparent gap-x-[15px] flex fill-white flex-row-reverse justify-center gap-y-[15px]">
                <span className="items-center box-border caret-transparent flex fill-white">
                  <img
                    src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-11.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-[15px] w-[15px]"
                  />
                </span>
                <span className="box-border caret-transparent block fill-white normal-case">
                  Descubre cómo
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};