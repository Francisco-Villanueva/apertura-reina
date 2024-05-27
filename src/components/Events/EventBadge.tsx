import { eventStore } from "@/store";
import { Event } from "@/types/event.types";

export function EventBadge({ event }: { event: Event }) {
  const { events } = eventStore();
  const EVENTS_COLORS = [
    "bg-reina-red",
    "bg-reina-yellow",
    "bg-reina-red/80",
    "bg-reina-yellow/80",
    "bg-reina-red/50",
    "bg-reina-yellow/50",
  ];
  console.log(events.find((event) => event.id));
  return (
    <div
      className={`px-4 py-1 rounded-sm   ${
        event ? EVENTS_COLORS[events.sort().indexOf(event)] : "bg-accent/50"
      }`}
    >
      {event.title}
    </div>
  );
}
