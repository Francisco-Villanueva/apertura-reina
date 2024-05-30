import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { eventStore } from "@/store";

interface SelectEventsProps {
  handleSelectEvent: (eventId: string) => void;
}
export function SelectEvents({ handleSelectEvent }: SelectEventsProps) {
  const { events } = eventStore();
  return (
    <div>
      <Select onValueChange={(e) => handleSelectEvent(e)}>
        <SelectTrigger className="w-[350px] ">
          <SelectValue placeholder="Select Event" />
        </SelectTrigger>
        <SelectContent>
          {events.map((event) => (
            <SelectItem
              value={event.id}
              className="flex cursor-pointer "
              key={event.id}
            >
              <span className="font-semibold mr-1">🗓️ {event.title}</span>
              <span className="text-xs"> {event.date}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
