import { Payment, PaymentStatus } from "@/types/payment.types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { paymentStore } from "@/store";
import { Checkbox } from "@/components/ui/checkbox";
import { Event } from "@/types/event.types";
import { EventDetail } from "../Events";
import { CheckIcon, MoreHorizontal, Trash, Trash2Icon } from "lucide-react";

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

function PaymenStatus({ status }: { status: PaymentStatus }) {
  const style: Record<PaymentStatus, string> = {
    Approved: "bg-success",
    Pending: "bg-pending",
    Refused: "bg-error",
  };

  return (
    <span className={` px-2 rounded-md flex items-center gap-1`}>
      <div className={`${style[status]} h-2 aspect-square rounded-full`} />
      {status}
    </span>
  );
}

function PriceFormat({ amount }: { amount: number }) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ARS",
  }).format(amount);

  return <div className=" font-medium">{formatted}</div>;
}

const handleDeltePayment = (paymentId?: string) => {
  PaymentServices.deletePayment(paymentId || "").then(() => {
    setTimeout(() => location.reload(), 500);
  });
};
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <PaymenStatus status={getValue<PaymentStatus>()} />,
  },
  {
    accessorKey: "EventId",
    header: "Event",
    cell: ({ getValue }) => <EventDetail eventId={getValue<string>()} />,
  },
  {
    accessorKey: "time",
    header: "Horario",
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "dni",
    header: "DNI",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => <PriceFormat amount={getValue<number>()} />,
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ getValue }) => <span className="">{getValue<string>()}</span>,
  },
  {
    accessorKey: "paymentDate",
    header: "Payment Date",
    cell: ({ getValue }) => <span className="">{getValue<string>()}</span>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleDeltePayment(payment.id)}
              className="font-semibold flex gap-1 items-center cursor-pointer"
            >
              <CheckIcon className="w-4 text-success" /> Confirmtar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDeltePayment(payment.id)}
              className="font-semibold flex gap-1 items-center cursor-pointer"
            >
              <Trash2Icon className="w-4 text-error" /> Canclear
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export function PaymentsTable({
  selectedPayments,
}: {
  selectedPayments?: Payment[];
}) {
  const { allPayments } = paymentStore();
  return (
    <div className=" font-montserrat ">
      <DataTable
        columns={columns}
        data={selectedPayments ? selectedPayments : allPayments}
      />
    </div>
  );
}
