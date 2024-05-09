import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <div className="absolute top-0 h-full w-full bg-foreground -z-10  ">
      <div className="h-40 aspect-square bg-reina-red absolute rounded-br-full top-0 left-0 max-md:opacity-0">
        <div className="relative w-3/4 aspect-square  bottom-0   ">
          <Image
            src="/reina/RYellow.png"
            alt="Reina burguesa "
            fill
            objectFit="contain"
          />
        </div>
      </div>

      <div className="h-40 max-md:h-20 aspect-square absolute rounded-tl-full bottom-0 right-0 flex justify-end items-end max-md:opacity-0">
        <div className="relative w-full aspect-square  bottom-0   ">
          <Image
            src="/reina/RBlanca.png"
            alt="Reina burguesa "
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
