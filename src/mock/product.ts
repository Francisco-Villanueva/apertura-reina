import { Event } from "@/types/event.types";

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

export const products: Event[] = [
  {
    id: "1",
    title: "Evento 1",
    date: "15/05/2024",
    subTitle: "Elaborá tu burger según tu imaginación 🍔🎨",
    price: 10,
    horario: "20:00 hs",
    description: [
      "Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.",
    ],
  },
  {
    id: "2",
    title: "Evento 2",
    date: "16/05/2024",
    subTitle: "Colaboracion con Patagonia 🍻",
    price: 150,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
  },
  {
    id: "23",
    title: "Evento 2",
    date: "17/05/2024",
    subTitle: "Colaboracion con Paesano Ind 👖 y Reset Salon 💇‍♂️",
    price: 14,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
  },
  {
    id: "askdgasj-123_1",
    title: "Evento 4",
    date: "18/05/2024",
    subTitle: "Dj y Open House  🎧🎵 + Tatuajes",
    price: 50,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
  },
  {
    id: "askdgasj-123_",
    title: "Evento 5",
    date: "19/05/2024",
    subTitle: "Exposicion de Vinos 🍷 y Cuadros",
    price: 75,
    horario: "20:00 hs",
    description: [
      "Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.",
    ],
  },
];
