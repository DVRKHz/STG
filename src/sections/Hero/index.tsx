import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div className="relative bg-gray-900 bg-[url('https://surestesostenible.org/wp-content/uploads/2024/08/Creditos-PPD-Mexico-1-1.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col mt-0 max-w-full min-h-[750px] w-full bg-center mb-[0%] mx-[0%] px-[10%] pt-[100px] md:min-h-[1000px] md:mx-auto md:my-0 md:pt-[200px] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-30 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
      <HeroContent />
    </div>
  );
};