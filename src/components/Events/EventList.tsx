import { eventStore } from "@/store";
import ProductCard from "../ProductCard";
import { Loader } from "lucide-react";

export function EventList() {
  const { events } = eventStore();

  return (
    <div className="  max-h-[90%]  overflow-auto max-md:px-2 flex flex-col gap-4 ">
      {events.length > 0 ? (
        events.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
