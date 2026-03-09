export const DonateButton = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap justify-center min-h-0 gap-y-5 w-full p-2.5 md:flex md:flex-nowrap md:min-h-[auto] md:w-[15%]">
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-0 gap-y-5 md:min-h-[auto]">
        <div className="box-border caret-transparent h-full">
          <div className="box-border caret-transparent">
            <a
              href="https://stg-cedes.vercel.app/donate"
              className="text-white text-[15px] font-medium bg-pink-600 box-border caret-transparent inline-block fill-white leading-[15px] text-center capitalize px-[35px] py-[15px] font-plus_jakarta_sans"
            >
              <span className="box-border caret-transparent gap-x-2.5 flex fill-white flex-row-reverse justify-center gap-y-2.5">
                <span className="items-center box-border caret-transparent flex fill-white min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <img
                    src="/paypal.svg"
                    alt="Icon"
                    className="box-border caret-transparent w-[15px]"
                  />
                </span>
                <span className="box-border caret-transparent block fill-white min-h-0 min-w-0 normal-case md:min-h-[auto] md:min-w-[auto]">
                  Donar
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};