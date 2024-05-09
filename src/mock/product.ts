export interface IProduct {
  id: number;
  title: string;
  date: string;
  subTitle: string;
  price: number;
  img: string;
  description: string[];
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "Evento 1",
    date: "15/05/2024",
    subTitle: "Colaboracion con palacio del vino",
    price: 10000,
    description: [
      "Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU3BBZUd2b5SaeFlR7ySKXmEshHU-ZTHSl5GS8Pr-0M7MhIHxJSBbpDV56A-e8o48PA0&usqp=CAU",
  },
  {
    id: 2,
    title: "Evento 2",
    date: "16/05/2024",
    subTitle: "Colaboracion con palacio del vino",
    price: 14000,
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
  },
];
