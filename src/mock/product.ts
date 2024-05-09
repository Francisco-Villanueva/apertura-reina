export interface IProduct {
  id: number;
  title: string;
  date: string;
  subTitle: string;
  price: number;
  img: string;
  horario: string;
  description: string[];
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "Evento 1",
    date: "15/05/2024",
    subTitle: "Elaborá tu burger según tu imaginación 🍔🎨",
    price: 10000,
    horario: "20:00 hs",
    description: [
      "Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU3BBZUd2b5SaeFlR7ySKXmEshHU-ZTHSl5GS8Pr-0M7MhIHxJSBbpDV56A-e8o48PA0&usqp=CAU",
  },
  {
    id: 2,
    title: "Evento 2",
    date: "16/05/2024",
    subTitle: "Colaboracion con Patagonia 🍻",
    price: 14000,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
  },
  {
    id: 3,
    title: "Evento 2",
    date: "17/05/2024",
    subTitle: "Colaboracion con Paesano Ind 👖 y Reset Salon 💇‍♂️",
    price: 14000,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
  },
  {
    id: 4,
    title: "Evento 4",
    date: "18/05/2024",
    subTitle: "Dj y Open House  🎧🎵 + Tatuajes",
    price: 12500,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
  },
  {
    id: 5,
    title: "Evento 5",
    date: "19/05/2024",
    subTitle: "Exposicion de Vinos 🍷 y Cuadros",
    price: 12500,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
  },
];
