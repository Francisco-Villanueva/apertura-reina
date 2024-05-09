import { useEffect, useState } from "react";
import { IProduct } from "@/mock/product";
import { Loader } from "../Loader";
import axios from "axios";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

interface MercadoPagoButtonProps {
  product: IProduct;
}

export const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", {
          product,
        });

        setUrl(preference.url);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    generateLink();
  }, [product]);

  return (
    <Button
      variant={"secondary"}
      onClick={() => router.push(url!)}
      disabled={loading}
      className=" w-full"
    >
      {loading ? <Loader /> : "Comprar"}
    </Button>
  );
};
