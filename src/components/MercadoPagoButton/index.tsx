import { useEffect, useState } from "react";
import { IProduct } from "@/mock/product";
import axios from "axios";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { Payment } from "@/types/payment.types";
import { PaymentServices } from "@/services/PaymentServices";

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

      const payment: Payment = {
        email: "test@gmail.com",
        name: "Luciano Perez",
        phone: "2915257573",
        status: "Pending",
        amount: product.price,
        paymentDate: new Date().toISOString(),
      };
      try {
        const newPayment = await PaymentServices.createPayment(payment);

        const { data: preference } = await axios.post("/api/checkout", {
          product,
          payment: newPayment,
        });

        setUrl(preference.url);
      } catch (error) {
        console.log("e");
        console.error(error);
      } finally {
        setLoading(false);
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
      Comprar
    </Button>
  );
};
