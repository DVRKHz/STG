export type PartnerLogosProps = {
  variant: string;
  title?: string;
  description?: string;
  logos?: Array<{
    src: string;
    alt: string;
    sizes: string;
    className: string;
  }>;
};

export const PartnerLogos = (props: PartnerLogosProps) => {
  if (props.variant === "header") {
    return (
      <div className="relative box-border caret-transparent flex flex-wrap w-full p-2.5 md:flex-nowrap gap-x-[30px] flex-col gap-y-[30px] md:w-6/12">
        <div className="relative box-border caret-transparent max-w-full text-center gap-x-[30px] gap-y-[30px]">
          <div className="box-border caret-transparent h-full">
            <p className="text-lime-600 text-xl font-semibold box-border caret-transparent tracking-[2px] leading-5 font-plus_jakarta_sans">
              {props.title}
            </p>
          </div>
        </div>
        <div className="relative box-border caret-transparent max-w-full text-center text-black gap-x-[30px] gap-y-[30px] font-plus_jakarta_sans">
          <div className="box-border caret-transparent h-full px-[10%] py-[0%]">
            <p className="box-border caret-transparent mb-[14.4px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const baseClassName =
    props.variant === "grid-4"
      ? "relative box-border caret-transparent flex flex-wrap w-full p-2.5 md:flex-nowrap items-center gap-x-0 flex-row shrink-0 justify-center gap-y-0 overflow-hidden md:[align-items:normal] md:flex-col md:justify-normal md:w-3/12"
      : "relative box-border caret-transparent flex flex-wrap w-full p-2.5 md:flex-nowrap gap-x-0 flex-col shrink-0 gap-y-0 overflow-hidden md:w-3/12";
  const itemClassName =
    props.variant === "grid-4"
      ? "relative box-border caret-transparent gap-x-0 max-w-full gap-y-0 text-center"
      : "relative box-border caret-transparent gap-x-0 max-w-full gap-y-0 text-center";
  const imageWrapperClassName =
    props.variant === "grid-4" && props.logos?.[0]
      ? "box-border caret-transparent h-full mb-[22px]"
      : "box-border caret-transparent h-full";

  return (
    <div className={baseClassName}>
      {props.logos?.map((logo, index) => (
        <div key={index} className={itemClassName}>
          <div
            className={
              index === 0 && props.variant === "grid-4"
                ? imageWrapperClassName
                : "box-border caret-transparent h-full"
            }
          >
            <img
              src={logo.src}
              alt={logo.alt}
              sizes={logo.sizes}
              className={logo.className}
            />
          </div>
        </div>
      ))}
    </div>
  );
};