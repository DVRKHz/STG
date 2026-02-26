export const MobileMenuToggle = () => {
  return (
    <div
      role="button"
      aria-label="Menu Toggle"
      className="text-neutral-700 text-[22px] items-center bg-black/10 box-border caret-transparent flex justify-center leading-[33px] min-h-[auto] min-w-[auto] mx-auto p-[5.5px] rounded-[3px] md:hidden md:min-h-0 md:min-w-0"
    >
      <img
        src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-2.svg"
        alt="Icon"
        className="box-border caret-transparent block h-[22px] w-[22px] md:inline"
      />
      <img
        src="https://c.animaapp.com/mlh7yfd1ocFTbj/assets/icon-3.svg"
        alt="Icon"
        className="box-border caret-transparent hidden h-[22px] w-[22px]"
      />
    </div>
  );
};