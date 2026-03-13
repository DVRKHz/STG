// data.ts

/**
 * INTERFAZ ProjectItem
 * Define la estructura obligatoria que debe tener cada objeto de datos.
 * Esto ayuda a prevenir errores (como olvidar el link o escribir mal el nombre de una propiedad).
 */
export interface ProjectItem {
  id: number;
  color: string;
  text: string;
  img: string;
  link: string;
}

/**
 * CONSTANTE ACCIONES_DATA
 * Almacena el historial de actividades recientes, reuniones y foros.
 * Se utiliza principalmente para mostrar el compromiso social y vecinal.
 */
export const ACCIONES_DATA: ProjectItem[] = [
   {
      id: 1,
      color: "bg-red-600",
      text: "12-Mar-2026: Reunión con Comité de Vecinos de la colonia Flor de Mayo de la zona norte de Tuxtla Gutiérrez",
      img: "https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/651042134_122113087809233537_7947807124482618302_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG1_aI6_BUg78vHo5NlPTk7Yp8XTBxBmwVinxdMHEGbBcBi188Q98g8XE06xd6d-2A3dJ4qdWXyZxBakL7O1QZw&_nc_ohc=3RYvJVVlFSkQ7kNvwGuJdkv&_nc_oc=Adkj1DsMPjTzQ_8RrMerjBhGkhBIZEl5yJcmAs97SFnGggo5442VHOUSAqYyb_lNU3k6Jhu0vVbz8a9jsMYcO229&_nc_zt=23&_nc_ht=scontent.ftgz1-2.fna&_nc_gid=36k4-lb70P7eOYkufMdadA&_nc_ss=8&oh=00_AfynrxeBmzM8Za4RVfGyZ1VnotJQQ2vr9bnlpFNetLSprw&oe=69BA2FD3",
      link: "https://www.facebook.com/share/p/1CGnsrpfiv/"
   },
   {
      id: 2,
      color: "bg-gray-800",
      text: "07-Mar-2026: Constitución de la Junta Vecinal de Acción Climática y Ambiental de la microcuenca Potinaspak",
      img: "https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/649222813_122112271833233537_1707289512660767234_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeERLvwSW5QhZiXyr6VmrLlTFjVeU9ZerNcWNV5T1l6s13io09HfgBUhXXUckQROkGqGV31O8z4M-BxVyHZrsOf7&_nc_ohc=5EJFJT3WGDoQ7kNvwG9-0j_&_nc_oc=AdnWHFx7I1Vn1MhyWQ1k_tZ3UKpC_cvFTIBe6xNp49m3WICn89y_Y7t_6biY_u0iw-QUUl1iYqUbEYmLunxRvhwv&_nc_zt=23&_nc_ht=scontent.ftgz1-2.fna&_nc_gid=HroMDdvFfrJeRRi_dkrh_Q&_nc_ss=8&oh=00_AfzICzZSWFrltXGFtTI25c0J0KUSuV2JZqIDhmjyGeN3wg&oe=69B4CA53",
      link: "https://www.facebook.com/share/p/1DjSkCexsA/"
    },
    { 
      id: 3, 
      color: "bg-cyan-500", 
      text: "19-Feb-2026: Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/636728353_122108827485233537_1843185938969958772_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGRSaIvNNILw7hk46y9DRLZemJ5B1eWokR6YnkHV5aiRDHN5gIVPNIjyIdER0En-ab8tH1CO6OMUAAIq9vu3TxN&_nc_ohc=rSKZ97nNVLoQ7kNvwEqDqGz&_nc_oc=Adlhi7ZQNkIt_ybuycOUwAP6sMbOeof7xtB9Y97UOwa3yzGQ1EyiGOnrTENRA0A9kGLjRwfc8bt65zyNr6KT5vC-&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=p47DtIDcB66bPbQM_IVaqg&_nc_ss=8&oh=00_AfzqAYwhhL78RgZfEYD-ZWQIKVLvPvwX01hguBEPrRX5GQ&oe=69AF8F49", 
      link: "https://www.facebook.com/share/p/1865WbmKEW/" 
    },
    { 
      id: 4, 
      color: "bg-lime-600", 
      text: "06-Feb-2026: Foro Vecinal con los padres de familia de la Escuela Primaria César Cruz Soto de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/632158841_122106447897233537_3142480587601029150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEzA32sRvLc5e-K3y0xsqYS_3G485yIrlH_cbjznIiuURehntWqXjl5yMDyZsBIx4lx-ASZwprwlukz1FJWgfCP&_nc_ohc=pmPn_NaSxDoQ7kNvwGLFnGJ&_nc_oc=AdkIy0fE6s05On8JYZZsX_pjTz-lvD0NW-oUudZS-r1IxDoUIuZGdDmsvla3Ik-3y3Dio7WyzeKh3n_P2K9A-rfE&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=ujyjkQTknyEl1W5d5LTZ2w&_nc_ss=8&oh=00_Afxu2U5nkEiIr1mGZHZUDmY0cYNOojATapm14duZcg1rlg&oe=69AF9595", 
      link: "https://www.facebook.com/share/p/1aYhbxAZJ5/" 
    },
    { 
      id: 5, 
      color: "bg-blue-900", 
      text: "28-Nov-2025: Realización del Foro Vecinal en COBACH 236 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/622801318_122099438763233537_8672220193020891562_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUxZHoZwDNUhY09VYHUyvl6jRM4zerBonqNEzjN6sGiQutHCVEFNTFLJLhAJAlkUvUzNlFpqgpFxw_9QXNTjH5&_nc_ohc=JoTuXbjFrdkQ7kNvwHMhXsk&_nc_oc=Admbf_UzXQC-oX0-sUUrPxusRcjlG6TggLyKdW_MtTI3frRe6gXqmSDPiiNkTwNwURquvSZVaOXuczAlHfK_1eho&_nc_zt=23&_nc_ht=scontent.ftgz1-2.fna&_nc_gid=qvriS25-YAXSyY6GygscDw&_nc_ss=8&oh=00_AfzpsFImGNgh7Ms4NsrrBzoauKOfd3D4HVF0xSyn_Tm7lg&oe=69BA3ED0", 
      link: "https://www.facebook.com/share/p/1CDq12MDBP/" 
    },
    { 
      id: 6, 
      color: "bg-lime-700", 
      text: "14-Nov-2025: Foro Vecinal en la Telesecundaria 121 de Tuxtla Gutiérrez", 
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622458706_122099432307233537_3020210483536083718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHbyrbK0wXRvCOd9dIFLOsSFvEo0ucxAYQW8SjS5zEBhOwXLEvwjHKvjVd5TCUxia9Qyfw6Ozn9bAM82mWTElTZ&_nc_ohc=CkOadaqnp5QQ7kNvwH_N1aA&_nc_oc=AdlLjPsP06yVHUuLOWpdn2lM9XX5oVyGLlnEK3aYKW1xUtckV1G8vFi_VS1JnuocSH160POOyrN_rtskeegz_aU_&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=bfA7Djc9PPSamJ97vpt7Vw&_nc_ss=8&oh=00_AfzUMK9bJJWpY6rNkirHyBVnFPRCYpKuD3CpKKZ5kwakrQ&oe=69B8D574", 
      link: "https://www.facebook.com/share/p/1KBfsvdWug/" 
    },
    {
      id: 7,
      color: "bg-purple-600",
      text: "28-Oct-2025: Reunión con docentes del COBACH 236 de Tuxtla Gutiérrez",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622811069_122099422425233537_1965953650729453859_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLC4IQ0lNoxRZFjH7AMKm35L2bcThJ0iLkvZtxOEnSIjtYTcJFZlauQ4_lES1yFEPBgLyyykeTH5XQatpOgYM2&_nc_ohc=b84kVBOw_f4Q7kNvwG5dAGH&_nc_oc=AdmuDefZxs2mSud-EnTc6cMZv8oT_b465LgBqg-F7eaeVGlzkXywaGTmFgiOuvhrYRF6RjB7735PuHSX10HwySBf&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=HX1GrslycuPVeY-dRDXA_A&_nc_ss=8&oh=00_AfxfVBTDrUOhJ1i0UkzyUgNM4rgzEfThuzdqLCmjUgWBlw&oe=69AF7C8A",
      link: "https://www.facebook.com/share/p/1APZW77FCG/" 
    },
    {
      id: 8,
      color: "bg-red-600",
      text: "16-Oct-2025: Reunión con funcionarios de ICIPLAM",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622280295_122099418897233537_5220128053047606726_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLDVTFnBS3cBhgX8QB2wNhQPJZ__dhvdhA8ln_92G92Gy3g4-UYW0ddj0OVi1iKkgv4UoHBPCHqj3rYOmfxi7b&_nc_ohc=ZCVhV7WX-EUQ7kNvwEPrB-N&_nc_oc=Adn3N9ZOvaTVg_TIHWU7dhBMWqWVxVLwzi__x0-diHgH5B7ifxQUmBFSZfTDvxZR8ZUw8_pz6xZ4y9LuWHxFEa2n&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=ASIdtpKLAHEQzUZ05hlmKw&_nc_ss=8&oh=00_Afypc2FSRJ3DmqdPHBy4f6TyTxga5NBvco-1gDG3abqE8Q&oe=69AF810C",
      link: "https://www.facebook.com/share/p/14VwtzhuYf1/" 
    },
    {
      id: 9,
      color: "bg-yellow-500",
      text: "02-Oct-2025: En DGIP de la UNACH  presentación del Proyecto a Red ECOS",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/622139211_122099382525233537_2975084611110239380_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE8Bom4LjIdlEiYu_n2g2LqI6uOe9w8MNQjq4573Dww1M9oeOkzjtNE9T72eMtBym1r8E9mQVOHJXzbC6y8VmDy&_nc_ohc=pNPJob74hL8Q7kNvwF6cMwS&_nc_oc=AdkVSvje0oVu4qLnpf8zzNnT34u9QxyPhvw4zorCpKNNUb1vptyaDgV7KSwMKAAl3eihFrT06U84gu2iXLQfNEQB&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=AZg9KMY9N6xiOjwiML5Feg&_nc_ss=8&oh=00_Afx4k3sIyic38MwfcOGjLtKz6ribyEBQD2w6TaHjHs6bAA&oe=69AF82A5",
      link: "https://www.facebook.com/share/p/14Von2ncSt6/"
    },
    {
      id: 10,
      color: "bg-green-500",
      text: "25-Ago-2025: Zona Norte de Tuxtla Gutiérrez",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/621875586_122099378679233537_6752445023470835222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHFyPPZIY1mdP6qXckbXCU0U3u475wm2txTe7jvnCba3GskDX-nZ5TWP-36UEyAGutwGPwFnR4siy5lDIUxxL6-&_nc_ohc=FI9n0kwQwLEQ7kNvwFA0t88&_nc_oc=AdkXRabH-4ktVbPQpN4tJ9ZJwKWOkwkqJgzOoHcv0ogVeSyCGfgbfL-iHNpQoVuxW6btjFKs4X8Jb90yiAPS6Vci&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=PYwjEKZe5zwgNBcWrIwFDg&_nc_ss=8&oh=00_AfwvBz3nn2k2STJA5t13ITnFsxk2vc3Kfwr1WC3bdiAJ4Q&oe=69AF9C69",
      link: "https://www.facebook.com/share/p/183sWL8zxQ/"
    },
    {
      id: 11,
      color: "bg-blue-500",
      text: "06-Ago-2025: Aula polifuncional de la Facultad de Arquitectura de la UNACH",
      img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/619247506_122095461411233537_3100937259519167829_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEae3sEDiUMqWKykHB-CuBooaguJOGPZkShqC4k4Y9mRM7aGAebbuAqitzbICjJkW6AGlsMRPQNZre6EDgGjeYw&_nc_ohc=Ng7aRxeCq_wQ7kNvwH0QlwY&_nc_oc=AdmfqoTbslUq7NvqLx2G26fDj1JmUXxFyPwDiuebpD5BVmzWaze4E6PZ_4m7G5dML8I4u-X6T0TMFG88w9YR_8kB&_nc_zt=23&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=re_vJoyaSTvoYjeCS3nJfw&_nc_ss=8&oh=00_AfzJzlgEuFJW3x2sLCoKM82lhZQCretIRfaV-5reLPCzIA&oe=69AF9FB6",
      link: "https://www.facebook.com/share/p/1BQAAQbBtH/"
    },
  // Agregar aquí mas acciones...
];

/**
 * CONSTANTE PROYECTOS_DATA
 * Destinada a almacenar iniciativas de largo plazo o proyectos de investigación
 * específicos del CEDES-UNACH.
 */
export const PROYECTOS_DATA: ProjectItem[] = [
  {
    id: 1,
    color: "bg-cyan-500",
    text: "19-Feb-2026: Reunión de trabajo en el COBACH 236 de Tuxtla Gutiérrez",
    img: "https://scontent.ftgz3-1.fna.fbcdn.net/v/...", // Tu URL original
    link: "https://www.facebook.com/share/p/1865WbmKEW/"
  },
  // Agregar aquí mas proyectos...
];