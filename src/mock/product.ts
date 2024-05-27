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
