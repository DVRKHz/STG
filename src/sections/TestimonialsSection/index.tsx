import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="relative bg-blue-900 box-border caret-transparent flex flex-col max-w-full w-full border-pink-600 mx-auto px-[0%] border-b-[15px] border-solid">
      <div className="box-border caret-transparent gap-x-[30px] flex grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[30px] w-full mx-auto py-[6%] md:flex-nowrap md:max-w-[min(100%,1140px)]">
        <div className="relative box-border caret-transparent gap-x-[30px] h-fit max-w-full gap-y-[30px] w-full">
          <div className="box-border caret-transparent h-full">
            <TestimonialCarousel />
            <div
              role="button"
              aria-label="Diapositiva anterior"
              className="absolute text-gray-200/90 text-[25px] box-border caret-transparent flex leading-[37.5px] top-[calc(50%_-_15px)] translate-y-[-50.0%] z-[2] left-[0%]"
            >
              <img
                src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-13.svg"
                alt="Icon"
                className="box-border caret-transparent h-[25px] w-[25px]"
              />
            </div>
            <div
              role="button"
              aria-label="Diapositiva siguiente"
              className="absolute text-gray-200/90 text-[25px] box-border caret-transparent flex leading-[37.5px] top-[calc(50%_-_15px)] translate-y-[-50.0%] z-[2] right-[0%]"
            >
              <img
                src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-14.svg"
                alt="Icon"
                className="box-border caret-transparent h-[25px] w-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};