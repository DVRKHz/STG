import { useRef } from 'react';

export const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      color: "bg-gray-800",
      text: "07-Mar-2026: Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/649222813_122112271833233537_1707289512660767234_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeERLvwSW5QhZiXyr6VmrLlTFjVeU9ZerNcWNV5T1l6s13io09HfgBUhXXUckQROkGqGV31O8z4M-BxVyHZrsOf7&_nc_ohc=5EJFJT3WGDoQ7kNvwG9-0j_&_nc_oc=AdnWHFx7I1Vn1MhyWQ1k_tZ3UKpC_cvFTIBe6xNp49m3WICn89y_Y7t_6biY_u0iw-QUUl1iYqUbEYmLunxRvhwv&_nc_zt=23&_nc_ht=scontent.ftgz1-2.fna&_nc_gid=HroMDdvFfrJeRRi_dkrh_Q&_nc_ss=8&oh=00_AfzICzZSWFrltXGFtTI25c0J0KUSuV2JZqIDhmjyGeN3wg&oe=69B4CA53",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 2, 
      color: "bg-cyan-500", 
      text: "19-Feb-2026: Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/636728353_122108827485233537_1843185938969958772_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGRSaIvNNILw7hk46y9DRLZemJ5B1eWokR6YnkHV5aiRDHN5gIVPNIjyIdER0En-ab8tH1CO6OMUAAIq9vu3TxN&_nc_ohc=rSKZ97nNVLoQ7kNvwEqDqGz&_nc_oc=Adlhi7ZQNkIt_ybuycOUwAP6sMbOeof7xtB9Y97UOwa3yzGQ1EyiGOnrTENRA0A9kGLjRwfc8bt65zyNr6KT5vC-&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=p47DtIDcB66bPbQM_IVaqg&_nc_ss=8&oh=00_AfzqAYwhhL78RgZfEYD-ZWQIKVLvPvwX01hguBEPrRX5GQ&oe=69AF8F49", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 3, 
      color: "bg-lime-600", 
      text: "06-Feb-2026: Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/632158841_122106447897233537_3142480587601029150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEzA32sRvLc5e-K3y0xsqYS_3G485yIrlH_cbjznIiuURehntWqXjl5yMDyZsBIx4lx-ASZwprwlukz1FJWgfCP&_nc_ohc=pmPn_NaSxDoQ7kNvwGLFnGJ&_nc_oc=AdkIy0fE6s05On8JYZZsX_pjTz-lvD0NW-oUudZS-r1IxDoUIuZGdDmsvla3Ik-3y3Dio7WyzeKh3n_P2K9A-rfE&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=ujyjkQTknyEl1W5d5LTZ2w&_nc_ss=8&oh=00_Afxu2U5nkEiIr1mGZHZUDmY0cYNOojATapm14duZcg1rlg&oe=69AF9595", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 4, 
      color: "bg-blue-900", 
      text: "28-Nov-2025: Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622801318_122099438763233537_8672220193020891562_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUxZHoZwDNUhY09VYHUyvl6jRM4zerBonqNEzjN6sGiQutHCVEFNTFLJLhAJAlkUvUzNlFpqgpFxw_9QXNTjH5&_nc_ohc=vGLhconMWJ4Q7kNvwHwtjLw&_nc_oc=AdmSKDHkZXa6vLQnXBcbL8VVdigIKL5pMxqgF31tptYxAdLY5-FfQ2dlyssmqGSnr8spBKs0FKZn_yJdlZ52qNpy&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=5HULMOKDMIDfd-WSAweMNA&_nc_ss=8&oh=00_AfwQWeI0p2ZvAMdsXXclxiJt43c89gpSEnRa0QiKkGVAFQ&oe=69AF7A90", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 5, 
      color: "bg-lime-700", 
      text: "14-Nov-2025: Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622458706_122099432307233537_3020210483536083718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHbyrbK0wXRvCOd9dIFLOsSFvEo0ucxAYQW8SjS5zEBhOwXLEvwjHKvjVd5TCUxia9Qyfw6Ozn9bAM82mWTElTZ&_nc_ohc=v-UYUr4n-xcQ7kNvwFJDbZ8&_nc_oc=AdkDqTOmxd0P8wZ6Np5SLcA-EvJTtXxEHB1fTQhkkRSkHswsLXBT2qUcjBS4EHDb5e2gvXhvNpXNmd1kV9iPj8Ym&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=VQEiBwB2CdNfMXF-1SI_RQ&_nc_ss=8&oh=00_AfzFOI3EuDZ5z7eTocjaU35vvLtOn0cgR0NECODmezcDEQ&oe=69AF9AF4", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 6,
      color: "bg-purple-600",
      text: "28-Oct-2025: Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622811069_122099422425233537_1965953650729453859_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLC4IQ0lNoxRZFjH7AMKm35L2bcThJ0iLkvZtxOEnSIjtYTcJFZlauQ4_lES1yFEPBgLyyykeTH5XQatpOgYM2&_nc_ohc=b84kVBOw_f4Q7kNvwG5dAGH&_nc_oc=AdmuDefZxs2mSud-EnTc6cMZv8oT_b465LgBqg-F7eaeVGlzkXywaGTmFgiOuvhrYRF6RjB7735PuHSX10HwySBf&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=HX1GrslycuPVeY-dRDXA_A&_nc_ss=8&oh=00_AfxfVBTDrUOhJ1i0UkzyUgNM4rgzEfThuzdqLCmjUgWBlw&oe=69AF7C8A",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 7,
      color: "bg-red-600",
      text: "16-Oct-2025: Reunión con funcionarios de ICIPLAM",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622280295_122099418897233537_5220128053047606726_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLDVTFnBS3cBhgX8QB2wNhQPJZ__dhvdhA8ln_92G92Gy3g4-UYW0ddj0OVi1iKkgv4UoHBPCHqj3rYOmfxi7b&_nc_ohc=ZCVhV7WX-EUQ7kNvwEPrB-N&_nc_oc=Adn3N9ZOvaTVg_TIHWU7dhBMWqWVxVLwzi__x0-diHgH5B7ifxQUmBFSZfTDvxZR8ZUw8_pz6xZ4y9LuWHxFEa2n&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=ASIdtpKLAHEQzUZ05hlmKw&_nc_ss=8&oh=00_Afypc2FSRJ3DmqdPHBy4f6TyTxga5NBvco-1gDG3abqE8Q&oe=69AF810C",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 8,
      color: "bg-yellow-500",
      text: "02-Oct-2025: En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622139211_122099382525233537_2975084611110239380_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE8Bom4LjIdlEiYu_n2g2LqI6uOe9w8MNQjq4573Dww1M9oeOkzjtNE9T72eMtBym1r8E9mQVOHJXzbC6y8VmDy&_nc_ohc=pNPJob74hL8Q7kNvwF6cMwS&_nc_oc=AdkVSvje0oVu4qLnpf8zzNnT34u9QxyPhvw4zorCpKNNUb1vptyaDgV7KSwMKAAl3eihFrT06U84gu2iXLQfNEQB&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=AZg9KMY9N6xiOjwiML5Feg&_nc_ss=8&oh=00_Afx4k3sIyic38MwfcOGjLtKz6ribyEBQD2w6TaHjHs6bAA&oe=69AF82A5",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 9,
      color: "bg-green-500",
      text: "25-Ago-2025: Zona Norte de Tuxtla Gutiérrez",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/621875586_122099378679233537_6752445023470835222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHFyPPZIY1mdP6qXckbXCU0U3u475wm2txTe7jvnCba3GskDX-nZ5TWP-36UEyAGutwGPwFnR4siy5lDIUxxL6-&_nc_ohc=FI9n0kwQwLEQ7kNvwFA0t88&_nc_oc=AdkXRabH-4ktVbPQpN4tJ9ZJwKWOkwkqJgzOoHcv0ogVeSyCGfgbfL-iHNpQoVuxW6btjFKs4X8Jb90yiAPS6Vci&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=PYwjEKZe5zwgNBcWrIwFDg&_nc_ss=8&oh=00_AfwvBz3nn2k2STJA5t13ITnFsxk2vc3Kfwr1WC3bdiAJ4Q&oe=69AF9C69",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 10,
      color: "bg-blue-500",
      text: "06-Ago-2025: Aula polifuncional de la Facultad de Arquitectura de la UNACH",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/619247506_122095461411233537_3100937259519167829_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEae3sEDiUMqWKykHB-CuBooaguJOGPZkShqC4k4Y9mRM7aGAebbuAqitzbICjJkW6AGlsMRPQNZre6EDgGjeYw&_nc_ohc=Ng7aRxeCq_wQ7kNvwH0QlwY&_nc_oc=AdmfqoTbslUq7NvqLx2G26fDj1JmUXxFyPwDiuebpD5BVmzWaze4E6PZ_4m7G5dML8I4u-X6T0TMFG88w9YR_8kB&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=re_vJoyaSTvoYjeCS3nJfw&_nc_ss=8&oh=00_AfzJzlgEuFJW3x2sLCoKM82lhZQCretIRfaV-5reLPCzIA&oe=69AF9FB6",
      link: "https://www.facebook.com/share/p/1BQAAQbBtH/"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.7; // Desplaza el 70% del ancho visible
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - moveDistance : scrollLeft + moveDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group w-full max-w-[1400px] mx-auto px-10">
      
      {/* Botones de Navegación */}
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white w-12 h-12 rounded-full transition-all hidden md:flex items-center justify-center">
        &#10094;
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 pb-8 scroll-smooth"
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="shrink-0 w-[676px] md:w-[547.5px] snap-start"
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full group/card no-underline"
            >
              <div className={`${project.color} flex flex-col h-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover/card:-translate-y-2`}>
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt="Proyecto"
                    className="aspect-video object-cover w-full transition-transform duration-500 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-1 px-2 flex flex-col grow justify-center">
                  <h3 className="text-white text-xl font-plus_jakarta_sans font-bold leading-normal line-clamp-3">
                    {project.text}
                  </h3>
                  <div className="mt-4 text-white/80 text-xs font-medium flex items-center gap-2">
                    Ver más en Facebook <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white w-12 h-12 rounded-full transition-all hidden md:flex items-center justify-center">
        &#10095;
      </button>
    </div>
  );
};