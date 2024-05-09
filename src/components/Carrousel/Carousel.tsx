import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/mock/product";
import ProductCard from "../ProductCard";

export function CarouselEvents() {
  return (
    <Carousel className="w-[450px]  max-sm:w-[300px] ">
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className=" ">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
