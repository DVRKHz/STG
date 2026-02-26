export const FooterLogo = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-full p-2.5 md:flex-nowrap md:w-1/5">
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center">
        <div className="box-border caret-transparent h-full">
          <a
            href="https://surestesostenible.org/"
            className="text-pink-600 box-border caret-transparent inline-block hover:text-slate-700 hover:border-slate-700"
          >
            <img
              src="/src/assets/logo-white.png"
              alt=""
              sizes="(max-width: 100px) 100vw, 100px"
              className="aspect-[auto_100_/_141] box-border caret-transparent inline-block grayscale-[1] brightness-[100] max-w-full w-[50px]"
            />
          </a>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
        <div className="text-[0px] box-border caret-transparent h-full leading-[0px] text-center md:text-left">
          <div
            role="list"
            className="box-border caret-transparent gap-x-3.5 inline-block justify-center justify-items-center gap-y-0 text-center w-full md:text-left"
          >
            <span
              role="listitem"
              className="box-border caret-transparent inline-block text-center md:text-left"
            >
              <a
                href="https://www.instagram.com/surestesostenible/"
                className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
              >
                <img
                  src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-18.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-5 w-5"
                />
              </a>
            </span>
            <span
              role="listitem"
              className="box-border caret-transparent inline-block text-center md:text-left"
            >
              <a
                href="https://mx.linkedin.com/company/sureste-sostenible-a-c"
                className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
              >
                <img
                  src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-19.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-5 w-5"
                />
              </a>
            </span>
            <span
              role="listitem"
              className="box-border caret-transparent inline-block text-center md:text-left"
            >
              <a
                href="https://www.youtube.com/@SuresteSostenible"
                className="text-gray-500 text-xl items-center bg-transparent box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-[50%] hover:text-white hover:border-white"
              >
                <img
                  src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-20.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-5 w-5"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};