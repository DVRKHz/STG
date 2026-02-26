export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
    className?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-6/12 p-2.5 md:flex-nowrap md:w-1/5 md:p-5">
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
        <div className="box-border caret-transparent h-full">
          <p className="text-white font-medium box-border caret-transparent leading-4 font-plus_jakarta_sans">
            {props.title}
          </p>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
        <div className="box-border caret-transparent h-full">
          <ul className="box-border caret-transparent list-none pl-0">
            {props.links.map((link, index) => (
              <li
                key={index}
                className={
                  link.className ||
                  (index === 0
                    ? "relative items-center box-border caret-transparent flex pb-[5px]"
                    : index === props.links.length - 1
                      ? "relative items-center box-border caret-transparent flex mt-[5px]"
                      : "relative items-center box-border caret-transparent flex mt-[5px] pb-[5px]")
                }
              >
                <a
                  href={link.href}
                  className="text-pink-600 text-[15px] font-extralight items-center box-border caret-transparent flex leading-[22.5px] w-full font-plus_jakarta_sans hover:text-slate-700 hover:border-slate-700"
                >
                  <span className="text-white box-border caret-transparent block">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};