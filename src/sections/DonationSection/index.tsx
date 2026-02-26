export const DonationSection = () => {
  return (
    <div className="relative bg-scroll bg-[url('https://surestesostenible.org/wp-content/uploads/2024/05/Creditos-PPD-Mexico-1-1.jpg')] bg-cover box-border caret-transparent flex flex-col max-w-full min-h-[800px] w-full overflow-hidden bg-center mx-auto px-0 md:bg-fixed md:px-[25px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-64% before:to-white before:to-100% before:pointer-events-none">
      <div className="items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pt-[70px] pb-0 md:flex-nowrap md:max-w-[1140px] md:py-[25px]">
        <div className="static box-border caret-transparent gap-x-5 grow-0 shrink-0 max-w-full min-h-[auto] gap-y-5 text-center w-full z-[1] left-[0%] top-[69px] md:absolute md:grow md:shrink md:left-[-10%] md:min-h-0 md:text-start md:top-[-100px] md:w-3/5">
          <div className="box-border caret-transparent h-full text-center md:text-start">
            <h2 className="text-white/70 text-[103px] font-semibold box-border caret-transparent leading-[103px] text-center font-plus_jakarta_sans md:text-[156px] md:leading-[156px] md:text-start">
              Dona ahora
            </h2>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
          <div className="box-border caret-transparent h-full">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <iframe
                  title="Donation Form"
                  src="https://surestesostenible.org/?givewp-route=donation-form-view&form-id=1531&locale=es_MX"
                  className="box-border caret-transparent h-[707px] leading-4 max-w-full min-w-full w-[800px] md:h-[675px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};