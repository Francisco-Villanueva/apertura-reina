import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [dniFilter, setDniFilter] = React.useState<string>("");
  const [timeFilter, setTimeFilter] = React.useState<string>("");
  const [statusFilter, setStatusFilter] = React.useState<string>("");
  const [asistConfirmed, setAsistConfirmed] = React.useState<boolean>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const clearFilters = () => {
    setColumnFilters([]);
    setDniFilter("");
    setTimeFilter("");
    setStatusFilter("");
    table.getColumn("dni")?.setFilterValue("");
    table.getColumn("time")?.setFilterValue("");
    table.getColumn("status")?.setFilterValue("");
  };

  return (
    <div>
      <div className="flex items-center py-4 gap-2">
        <Button onClick={clearFilters}>Clear</Button>
        <Input
          variant="secondary"
          placeholder="Buscar por DNI"
          value={dniFilter}
          onChange={(event) => {
            const value = event.target.value;
            setDniFilter(value);
            table.getColumn("dni")?.setFilterValue(value);
          }}
          className="max-w-sm border"
        />
        <Select
          value={timeFilter}
          onValueChange={(timeValue) => {
            setTimeFilter(timeValue);
            table.getColumn("time")?.setFilterValue(timeValue);
          }}
        >
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Horario" />
          </SelectTrigger>
          <SelectContent>
            {[" ", "20:30 - 21:30", "21:30 - 22:30", "22:30 - 23:30"].map(
              (time) => (
                <SelectItem
                  value={time}
                  className="flex cursor-pointer "
                  key={time}
                >
                  <span className="font-semibold mr-1">🗓️ {time}</span>
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
        <Select
          value={statusFilter}
          onValueChange={(statusValue) => {
            setStatusFilter(statusValue);
            table.getColumn("status")?.setFilterValue(statusValue);
          }}
        >
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Estado del pago" />
          </SelectTrigger>
          <SelectContent>
            {["Pending", "Approved", "Refused"].map((status) => (
              <SelectItem
                value={status}
                className="flex cursor-pointer "
                key={status}
              >
                <span className="font-semibold mr-1">🗓️ {status}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={statusFilter}
          onValueChange={(statusValue) => {
            setAsistConfirmed(statusValue === "si");
            table
              .getColumn("confirmAsist")
              ?.setFilterValue(statusValue === "si");
          }}
        >
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Estado del pago" />
          </SelectTrigger>
          <SelectContent>
            {["si", "no"].map((asistValue, index) => (
              <SelectItem
                value={asistValue}
                className="flex cursor-pointer "
                key={index}
              >
                <span className="font-semibold mr-1">{asistValue}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border bg-[rgba(230,230,230)]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-xs">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
