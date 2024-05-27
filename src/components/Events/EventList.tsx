import { eventStore } from "@/store";
import ProductCard from "../ProductCard";

export function EventList() {
  const { events } = eventStore();

  return (
    <div className="  max-h-[90%]  overflow-auto max-md:px-2">
      {events.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
