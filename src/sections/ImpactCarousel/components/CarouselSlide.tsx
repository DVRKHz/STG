export type CarouselSlideProps = {
  ariaLabel: string;
  imageUrl: string;
  imageSizes: string;
  imageClassName: string;
  titleTag: "h2" | "p";
  titleText: string;
  numberPrefix: string;
  numberValue: string;
  numberSuffix: string;
  numberClassName: string;
  descriptionContent: React.ReactNode;
  descriptionClassName?: string;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  const TitleTag = props.titleTag;

  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent shrink-0 w-screen mr-2.5"
    >
      <div className="relative box-border caret-transparent flex flex-col h-full max-w-full w-full px-2.5">
        <div className="box-border caret-transparent gap-x-5 flex flex-row-reverse grow flex-wrap-reverse h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:flex-row md:flex-nowrap md:max-w-[min(100%,1140px)]">
          <div className="relative box-border caret-transparent flex flex-col w-full px-2.5">
            <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5 text-center">
                <div className="box-border caret-transparent h-full">
                  <img
                    src={props.imageUrl}
                    alt=""
                    sizes={props.imageSizes}
                    className={`box-border caret-transparent inline-block h-[200px] max-w-full object-cover w-[800px] md:h-[500px] ${props.imageClassName}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent flex flex-col w-full">
            <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-end max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pb-0 md:flex-nowrap md:max-w-[min(100%,1140px)] md:pb-[50px]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
                <div className="box-border caret-transparent h-full">
                  <TitleTag className="text-cyan-500 text-[25px] font-semibold box-border caret-transparent tracking-[2px] leading-[25px] font-plus_jakarta_sans">
                    {props.titleText}
                  </TitleTag>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
                <div className="box-border caret-transparent h-full">
                  <div className="items-stretch box-border caret-transparent flex flex-col-reverse justify-center">
                    <div
                      className={`text-white font-semibold box-border caret-transparent flex basis-[0%] grow text-center font-plus_jakarta_sans ${props.numberClassName}`}
                    >
                      <span
                        className={`box-border caret-transparent block text-end ${props.numberClassName === "text-6xl leading-[60px] md:text-[100px] md:leading-[100px]" ? "text-6xl leading-[60px] md:text-[100px] md:leading-[100px]" : ""}`}
                      >
                        {props.numberPrefix}
                      </span>
                      <span
                        className={
                          props.numberClassName ===
                          "text-6xl leading-[60px] md:text-[100px] md:leading-[100px]"
                            ? "text-6xl box-border caret-transparent block leading-[60px] md:text-[100px] md:leading-[100px]"
                            : "box-border caret-transparent block"
                        }
                      >
                        {props.numberValue}
                      </span>
                      <span
                        className={
                          props.numberClassName ===
                          "text-6xl leading-[60px] md:text-[100px] md:leading-[100px]"
                            ? "text-6xl box-border caret-transparent block grow leading-[60px] text-start md:text-[100px] md:leading-[100px]"
                            : "box-border caret-transparent block grow text-start"
                        }
                      >
                        {props.numberSuffix}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-white text-lg font-medium box-border caret-transparent gap-x-5 leading-[27px] max-w-full gap-y-5 font-plus_jakarta_sans">
                <div className="box-border caret-transparent h-full">
                  {props.descriptionClassName ? (
                    <p className={props.descriptionClassName}>
                      {props.descriptionContent}
                    </p>
                  ) : (
                    props.descriptionContent
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};