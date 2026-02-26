import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Section } from "@/components/Section";
import { ImpactCarousel } from "@/sections/ImpactCarousel";
import { PartnersSection } from "@/sections/PartnersSection";
import { DonationSection } from "@/sections/DonationSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { BlogSection } from "@/sections/BlogSection";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { ReportSection } from "@/sections/ReportSection";

export const Home = () => {
  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <div className="box-border caret-transparent before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system">
        <Navbar />
        <main className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <Hero />
              <Section />
              <ImpactCarousel />
              <PartnersSection />
              <DonationSection />
              <ProjectsSection />
              <div className="relative bg-cover box-border caret-transparent flex flex-col max-w-full min-h-[350px] w-full bg-center mx-auto px-[5%] md:px-[0%] before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system">
                <div className="box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-center max-w-[min(100%,767px)] gap-y-10 w-full mx-auto py-[5%] md:flex-nowrap md:justify-normal md:max-w-[min(100%,1140px)] md:py-[8%]">
                  <div className="absolute box-border caret-transparent h-[max(100%_+_0px,100%)] pointer-events-none w-[max(100%_+_0px,100%)] z-0 overflow-hidden inset-0 before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:pointer-events-none before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:z-[1] before:border-separate before:left-0 before:top-0 before:font-apple_system">
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      src="https://surestesostenible.org/wp-content/uploads/2024/06/106071-672600128-Tiny.mp4"
                      className="absolute box-border caret-transparent h-[350px] leading-4 max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-[622.222px] left-2/4 top-2/4 md:h-[720px] md:w-screen"
                    ></video>
                  </div>
                  <div className="relative box-border caret-transparent gap-x-10 max-w-full gap-y-10">
                    <div className="box-border caret-transparent h-full">
                      <h2 className="text-white text-[39px] font-light box-border caret-transparent leading-[39px] font-plus_jakarta_sans md:text-[44px] md:leading-[44px]">
                        <b className="text-[39px] font-extrabold box-border caret-transparent leading-[39px] md:text-[44px] md:leading-[44px]">
                          Involúcrate
                        </b>
                        en la conservación
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <TestimonialsSection />
              <BlogSection />
            </div>
          </div>
        </main>
      </div>
      <div className="box-border caret-transparent before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system">
        <NewsletterSection />
        <ReportSection />
      </div>
    </body>
  );
};