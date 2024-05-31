import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export function MenuCarousel() {
  return (
    <Carousel className="w-full  max-w-md  ">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              src={`/menu${index + 1}.png`}
              alt="menu reina burguesa"
              width={700} // Nuevo ancho más pequeño
              height={80}
              // objectFit="cover"
            />
            {/* <div className={`relative w-[500px] aspect-[700/900]`}>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
