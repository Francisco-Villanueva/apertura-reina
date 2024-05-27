import { Event } from "@/types/event.types";
import { create } from "zustand";

interface IEventStore {
  events: Event[];
  setEvents: (e: Event[]) => void;
  selectedEvent: Event | null;
  setSelectedEvent: (e: Event) => void;
  selectedTime: string;
  setSelectedTime: (e: string) => void;
}

export const eventStore = create<IEventStore>((set) => ({
  events: [],
  setEvents: (events) => set(() => ({ events })),
  selectedEvent: null,
  setSelectedEvent: (selectedEvent) => set(() => ({ selectedEvent })),
  selectedTime: "",
  setSelectedTime: (selectedTime) => set(() => ({ selectedTime })),
}));
