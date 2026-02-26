export type TestimonialSlideProps = {
  ariaLabel: string;
  testimonialText: React.ReactNode;
  authorName: string;
  programName: string;
  imageUrl: string;
  imageAlt?: string;
  imageSizes?: string;
  imageContainerVariant?: string;
};

export const TestimonialSlide = (props: TestimonialSlideProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent shrink-0 w-screen mr-2.5 md:w-[1140px]"
    >
      <div className="relative box-border caret-transparent flex flex-col h-full max-w-full w-full px-[25px]">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[25px] md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent flex flex-col w-full px-2.5">
            <div className="box-border caret-transparent gap-x-5 flex grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
              <div className="relative box-border caret-transparent flex flex-col w-full px-2.5">
                <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
                  <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-left">
                    <div className="box-border caret-transparent h-full">
                      <p className="text-cyan-500 text-xl font-semibold box-border caret-transparent tracking-[2px] leading-5 font-plus_jakarta_sans">
                        TESTIMONIOS
                      </p>
                    </div>
                  </div>
                  <div className="relative text-white box-border caret-transparent gap-x-5 max-w-full gap-y-5 font-plus_jakarta_sans">
                    <div className="box-border caret-transparent h-full">
                      <p className="box-border caret-transparent mb-[14.4px]">
                        {props.testimonialText}
                      </p>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 w-full">
                    <div className="box-border caret-transparent h-full">
                      <div className="box-border caret-transparent flex py-0.5">
                        <span className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-cyan-500 box-border caret-transparent flex w-full border-t"></span>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
                    <div className="box-border caret-transparent h-full">
                      <p className="text-white text-xl font-light box-border caret-transparent leading-5 font-plus_jakarta_sans">
                        {props.authorName}
                      </p>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
                    <div className="box-border caret-transparent h-full">
                      <p className="text-zinc-400 text-[17px] font-light box-border caret-transparent leading-[17px] font-plus_jakarta_sans">
                        {props.programName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-full p-2.5 md:flex-nowrap ${props.imageContainerVariant || ""}`}
              >
                <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center">
                  <div className="box-border caret-transparent h-full">
                    <img
                      src={props.imageUrl}
                      alt={props.imageAlt || ""}
                      sizes={
                        props.imageSizes || "(max-width: 800px) 100vw, 800px"
                      }
                      className="aspect-[4_/_3] box-border caret-transparent inline-block max-w-full object-cover w-[800px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};