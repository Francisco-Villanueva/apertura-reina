import { Payment, PaymentStatus } from "@/types/payment.types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { paymentStore } from "@/store";
import { Checkbox } from "@/components/ui/checkbox";
import { EventDetail } from "../Events";
import { PaymentActions } from "./components";

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
    accessorKey: "quantity",
    header: "Cantidad",
    cell: ({ getValue }) => (
      <span className=" text-center w-1/2 mx-auto text-[16px]  flex justify-center rounded-md text-reina-yellow font-bold bg-reina-red py-1">
        {getValue<string>()}
      </span>
    ),
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
    accessorKey: "confirmAsist",
    header: "Asistencia",
    cell: ({ getValue }) => (
      <div className="flex items-center gap-2 w-full justify-center">
        <Checkbox checked={getValue<boolean>()} />
        <span className="font-bold">{getValue<boolean>() ? "SI" : "NO"}</span>
      </div>
    ),
  },
  // {
  //   accessorKey: "method",
  //   header: "Method",
  //   cell: ({ getValue }) => <span className="">{getValue<string>()}</span>,
  // },
  {
    accessorKey: "paymentDate",
    header: "Payment Date",
    cell: ({ getValue }) => <span className="">{getValue<string>()}</span>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return <PaymentActions payment={payment} />;
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
