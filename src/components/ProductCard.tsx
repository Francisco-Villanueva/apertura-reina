import { IProduct } from "@/mock/product";
import Image from "next/image";
import React from "react";
import { formatNumber } from "@/utils/formatNumber";
import { ClientDataAside } from "./Aside";
interface ProductCardInterface {
  product: IProduct;
  readonly?: boolean;
}
export default function ProductCard({
  product,
  readonly,
}: ProductCardInterface) {
  return (
    <article
      className={`flex flex-col justify-center   gap-4  text-secondary  relative   ${
        readonly
          ? " w-full "
          : " border-l border-dashed py-4   w-5/6 max-md:w-full "
      }  `}
    >
      {!readonly && (
        <div className="border h-2 aspect-square rounded-full absolute top-6 translate-x-[-50%] bg-secondary" />
      )}
      <div className="flex justify-start ml-2">
        <h5 className=" border px-4 rounded-xl font-semibold text-secondary bg-secondary/15 border-accent/25">
          {product.date}
        </h5>
      </div>

      <article
        className={`flex justify-between gap-4 items-start bg-primary rounded-md p-4  max-md:p-2 ml-6 max-md:ml-3 border border-secondary/15 ${
          readonly
            ? "select-none"
            : "cursor-pointer hover:border-secondary transition-all duration-200"
        }  `}
      >
        <section
          className={
            "flex flex-col    font-semibold justify-between w-full gap-2  "
          }
        >
          <header className={"flex flex-col justify-between "}>
            <div className="flex items-center gap-1 text-secondary/75">
              <span className="text-secondary/75 text-sm max-md:text-xs">
                {product.horario} -{" "}
              </span>
              <h3 className="font-semibold text-md  max-md:text-sm">
                ${formatNumber(product.price)}
              </h3>
            </div>
            <h2 className="font-semibold text-[25px] max-md:text-[18px] ">
              {product.title}
            </h2>
          </header>

          <div className="text-secondary/50 text-sm font-normal ">
            {product.subTitle}
          </div>

          {!readonly && (
            <div className="w-1/3 max-md:w-full">
              <ClientDataAside product={product} />
            </div>
          )}
        </section>
        {!readonly && (
          <div className="h-32 max-md:h-10  relative aspect-square opacity-75   ">
            <Image
              src={"/reina/RBlanca.png"}
              alt={product.title}
              fill
              objectFit="contain"
              priority
            />
          </div>
        )}
      </article>
    </article>
  );
}
