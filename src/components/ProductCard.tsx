import { IProduct } from "@/mock/product";
import Image from "next/image";
import React from "react";
import { formatNumber } from "@/utils/formatNumber";
import { MercadoPagoButton } from "./MercadoPagoButton";
export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <article
      className={
        "flex flex-col justify-center   bg-primary text-white  px-6 py-10 rounded-xl relative  w-full h-full "
      }
    >
      <div className="h-56 absolute aspect-square opacity-15 m-auto ">
        <Image
          src={"/reina/RBlanca.png"}
          alt={product.title}
          fill
          objectFit="contain"
          priority
        />
      </div>

      <section className={"flex flex-col gap-10  justify-between  "}>
        <header className={"flex max-sm:flex-col justify-between "}>
          <section className=" flex flex-co text-lg l items-start gap-2">
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold text-[25px]">{product.title}</h2>
              <h5 className="text-sm bg-accent text-primary text-center font-bold px-4 py-1 rounded-2xl  ">
                {product.date}
              </h5>
            </div>
          </section>
          <h3 className="font-semibold text-3xl max-md:text-xl   rounded-md">
            ${formatNumber(product.price)}
          </h3>
        </header>

        <div>
          <h6 className="  uppercase font-semibold max-md:text-sm ">
            {product.subTitle}
          </h6>
        </div>

        <div className="flex flex-col gap-1 items-start w-full text-start text-sm  text-white/85  ">
          {product.description.map((item) => (
            <div className="flex items-start gap-1" key={item}>
              - <p className=" ">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <MercadoPagoButton product={product} />
        </div>
      </section>
    </article>
  );
}
