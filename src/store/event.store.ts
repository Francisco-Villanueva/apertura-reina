import { Event } from "@/types/event.types";
import { create } from "zustand";

interface IEventStore {
  selectedEvent: Event | null;
  setSelectedEvent: (e: Event) => void;
}

export const eventStore = create<IEventStore>((set) => ({
  selectedEvent: null,
  setSelectedEvent: (selectedEvent) => set(() => ({ selectedEvent })),
}));
