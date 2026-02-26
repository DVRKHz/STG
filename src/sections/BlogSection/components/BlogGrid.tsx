export const BlogGrid = () => {
  return (
    <div
      role="list"
      className="items-stretch box-border caret-transparent gap-x-[30px] grid grid-cols-[repeat(1,1fr)] gap-y-[30px] md:grid-cols-[repeat(2,1fr)]"
    >
      <article
        role="listitem"
        className="box-border caret-transparent flex text-left overflow-hidden"
      >
        <a
          href="https://surestesostenible.org/revitalizando-el-arrecife-mesoamericano-2/"
          className="relative text-pink-600 box-border caret-transparent block shrink-0 w-full mr-5 md:w-2/5 hover:text-slate-700 hover:border-slate-700"
        >
          <div className="relative box-border caret-transparent overflow-hidden">
            <img
              src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Creditos-PPD-Mexico-1-1.jpg"
              alt=""
              sizes="(max-width: 2000px) 100vw, 2000px"
              className="aspect-[auto_2000_/_1125] box-border caret-transparent w-full"
            />
          </div>
        </a>
        <div className="box-border caret-transparent flex-col grow p-2.5">
          <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent leading-[21.6px] mb-5 font-plus_jakarta_sans">
            <a
              href="https://surestesostenible.org/revitalizando-el-arrecife-mesoamericano-2/"
              className="box-border caret-transparent"
            >
              Revitalizando el Arrecife Mesoamericano{" "}
            </a>
          </h3>
          <div className="text-zinc-400 text-xs box-border caret-transparent leading-[15.6px] mb-[13px] font-plus_jakarta_sans">
            <span className="box-border caret-transparent">
              4 de junio de 2024{" "}
            </span>
          </div>
        </div>
      </article>
      <article
        role="listitem"
        className="box-border caret-transparent flex text-left overflow-hidden"
      >
        <a
          href="https://surestesostenible.org/revitalizando-el-arrecife-mesoamericano/"
          className="relative text-pink-600 box-border caret-transparent block shrink-0 w-full mr-5 md:w-2/5 hover:text-slate-700 hover:border-slate-700"
        >
          <div className="relative box-border caret-transparent overflow-hidden">
            <img
              src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/Creditos-PPD-Mexico-1-1.jpg"
              alt=""
              sizes="(max-width: 2000px) 100vw, 2000px"
              className="aspect-[auto_2000_/_1125] box-border caret-transparent w-full"
            />
          </div>
        </a>
        <div className="box-border caret-transparent flex-col grow p-2.5">
          <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent leading-[21.6px] mb-5 font-plus_jakarta_sans">
            <a
              href="https://surestesostenible.org/revitalizando-el-arrecife-mesoamericano/"
              className="box-border caret-transparent"
            >
              Revitalizando el Arrecife Mesoamericano{" "}
            </a>
          </h3>
          <div className="text-zinc-400 text-xs box-border caret-transparent leading-[15.6px] mb-[13px] font-plus_jakarta_sans">
            <span className="box-border caret-transparent">
              29 de mayo de 2024{" "}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};