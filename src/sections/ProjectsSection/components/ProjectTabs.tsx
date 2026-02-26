export const ProjectTabs = () => {
  return (
    <div
      role="tablist"
      className="box-border caret-transparent gap-x-[45px] contents shrink-0 flex-nowrap justify-start min-h-0 min-w-0 overflow-x-scroll overflow-y-auto gap-y-[45px] md:flex md:flex-wrap md:justify-start md:min-h-[auto] md:min-w-[auto] md:overflow-x-visible md:overflow-y-visible"
    >
      <button
        role="tab"
        className="relative text-white font-medium items-center bg-cyan-500 caret-transparent gap-x-[5px] flex basis-[content] shrink-0 justify-center order-1 gap-y-[5px] text-center text-nowrap border border-cyan-500 mb-[30px] px-[35px] py-[15px] border-solid font-plus_jakarta_sans md:shrink md:order-none md:text-wrap md:mb-0"
      >
        <span className="items-center box-border caret-transparent flex text-nowrap md:text-wrap">
          Acciones{" "}
        </span>
      </button>
      <button
        role="tab"
        className="relative text-black font-medium items-center bg-white caret-transparent gap-x-[5px] flex basis-[content] shrink-0 justify-center order-2 gap-y-[5px] text-center text-nowrap border border-stone-300 mt-[45px] px-[35px] py-[15px] border-solid font-plus_jakarta_sans md:shrink md:order-none md:text-wrap md:mt-0 hover:text-white hover:bg-cyan-500 hover:border-cyan-500"
      >
        <span className="items-center box-border caret-transparent flex text-nowrap md:text-wrap">
          Proyectos{" "}
        </span>
      </button>
    </div>
  );
};