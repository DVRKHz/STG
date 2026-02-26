import { BlogGrid } from "@/sections/BlogSection/components/BlogGrid";

export const BlogSection = () => {
  return (
    <div className="relative box-border caret-transparent hidden flex-col max-w-full w-full mx-auto px-[5%] md:px-[0%]">
      <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] gap-y-[30px] w-full mx-auto py-[5%] md:flex-nowrap md:max-w-[min(100%,1140px)] md:py-[6%]">
        <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px] text-left">
          <div className="box-border caret-transparent h-full">
            <p className="text-lime-600 text-xl font-semibold box-border caret-transparent tracking-[2px] leading-5 font-plus_jakarta_sans">
              BLOG
            </p>
          </div>
        </div>
        <div className="relative text-black box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px] font-plus_jakarta_sans">
          <div className="box-border caret-transparent h-full p-[0%] md:pr-[26%]">
            <p className="box-border caret-transparent mb-[14.4px]">
              Explora nuestro blog y sumérgete en los relatos inspiradores y los
              avances significativos que estamos logrando en la conservación y
              restauración de los ecosistemas del Sureste mexicano.
            </p>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-[30px] max-w-full gap-y-[30px]">
          <div className="box-border caret-transparent h-full">
            <BlogGrid />
          </div>
        </div>
      </div>
    </div>
  );
};