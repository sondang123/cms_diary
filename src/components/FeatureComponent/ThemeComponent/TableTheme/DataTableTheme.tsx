import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BaseTextSearch } from "~/components/AppComponent/BaseTextSearch";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { AppResource } from "~/const/AppResource";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  elementHeaderRight?: React.ReactNode;
  elementHeaderLeft?: React.ReactNode;
  onClickEmpty?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function DataTableTheme<TData, TValue>({
  columns,
  data,
  elementHeaderRight,
  elementHeaderLeft,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-3">
      <div className="flex justify-between">
        <div className="mr-3 flex items-center gap-2">
          <div className="w-[360px]">
            <BaseTextSearch placeholder="Search items" onChange={() => {}} />
          </div>
          {elementHeaderLeft ? elementHeaderLeft : null}
        </div>
        {elementHeaderRight ? elementHeaderRight : null}
      </div>
      <div className="mt-8 rounded-md">
        <Table>
          <TableHeader className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-neutral-3">
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
                  className="border-neutral-3"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      width={cell.column.columnDef?.size}
                    >
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
                  className="h-[50vh] text-center"
                >
                  <div className="flex-center flex-col">
                    <img
                      src={AppResource.images.img_empty_data}
                      alt=""
                      className="mx-auto w-[100px] text-center"
                    />
                    <p className="py-4"> No data</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
