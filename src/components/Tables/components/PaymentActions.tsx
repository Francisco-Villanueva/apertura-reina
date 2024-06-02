import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PaymentServices } from "@/services";
import { Payment } from "@/types/payment.types";
import { CheckIcon, Loader, MoreHorizontal, Trash2Icon } from "lucide-react";
import { useState } from "react";

interface PaymentActionsProps {
  payment: Payment;
}
export function PaymentActions({ payment }: PaymentActionsProps) {
  const [loading, setLoading] = useState(false);

  const handleDeltePayment = () => {
    setLoading(true);
    PaymentServices.restorePayment(payment.id || "").then((res) => {
      PaymentServices.deletePayment(payment.id || "").then(() => {
        setTimeout(() => location.reload(), 500);
      });
    });
  };
  const handleConfirmPayment = () => {
    console.log("CONFIRMAR");
    setLoading(true);
    PaymentServices.updatePayment({
      payment,
      data: {
        confirmAsist: true,
      },
    }).then((res) => {
      setLoading(false);

      setTimeout(() => location.reload(), 500);
    });
  };

  const handleReturnPayment = () => {
    PaymentServices.returnPayment(payment.id!).then(() => {
      setTimeout(() => location.reload(), 500);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="font-semibold flex gap-1 items-center cursor-pointer"
          onClick={handleConfirmPayment}
        >
          <CheckIcon className="w-4 text-success" /> Confirmar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-semibold flex gap-1 items-center cursor-pointer"
          onClick={handleDeltePayment}
        >
          <Trash2Icon className="w-4 text-error" /> Borrar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-semibold flex gap-1 items-center cursor-pointer"
          onClick={handleReturnPayment}
        >
          <Trash2Icon className="w-4 text-reina-yellow" /> Aprobar ✅
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
