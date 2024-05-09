import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <div className="absolute top-0 h-full w-full bg-foreground -z-10 ">
      <div className="h-80 aspect-square bg-reina-red/50 absolute rounded-br-full top-0 left-0" />

      <div className="h-40 aspect-square bg-reina-red/50 absolute rounded-tl-full bottom-0 right-0 flex justify-end items-end">
        <div className="relative w-[70%] aspect-square  bottom-0    opacity-50">
          <Image
            src="/reina/RYellow.png"
            alt="Reina burguesa "
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
