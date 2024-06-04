import React, { useMemo } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "~/components/ui/checkbox";
import { AppResource } from "~/const/AppResource";
import { useNavigate } from "react-router-dom";

import { AppConfirmDelete } from "~/components/AppComponent/AppConfirm/AppConfirmDelete";
import { ButtonFullBg } from "~/components/AppComponent/AppButton/ButtonFullBg";
import { AppData } from "~/const/AppData";
import { TypeTheme } from "~/const/Type/TypeTheme";
import { utils } from "~/utils";
import { AppPagination } from "~/components/AppComponent/AppPagination";
import { DataTableTheme } from "../../ThemeComponent/TableTheme/DataTableTheme";

interface IAppProps {}

export const TableBackgroundCategory: React.FC<IAppProps> = () => {
  const navigate = useNavigate();
  const columnTable: ColumnDef<TypeTheme>[] = useMemo(() => {
    return [
      {
        accessorKey: "id",
        header: ({ table }) => (
          <div className="typo-s13-w600 text-left text-neutral-4 flex items-center">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
              className="mr-4"
            />
            ID Theme
          </div>
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-4 text-left font-medium">
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className=""
              />
              <p className="typo-s13-w600 text-shades-475">
                {row?.original?.id}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "name",
        header: () => (
          <div className="typo-s13-w600  text-neutral-4">Theme Name</div>
        ),

        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-5">
              {row?.original?.img_preview ? (
                <img
                  src={row?.original?.img_preview}
                  alt="img_preview"
                  width={50}
                  className="object-contain rounded-3"
                />
              ) : null}
              <p className="typo-s15-w700 text-neutral-7">
                {row?.original?.name}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "wall_background",
        header: () => (
          <div className="typo-s13-w600 text-neutral-4">Theme Background</div>
        ),
        cell: ({ row }) => {
          return (
            <div className="">
              <img
                src={row.original.wall_background}
                alt={`${row?.id}_wall_background`}
                className="object-contain rounded-3"
              />
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: () => (
          <div className="typo-s13-w600 text-center text-neutral-4">Status</div>
        ),
        cell: () => {
          return (
            <div className="text-center font-medium">
              {utils.renderStatusTheme("")}
            </div>
          );
        },
      },
      {
        accessorKey: "action",
        header: () => (
          <div className="typo-s13-w600 text-right text-neutral-4">Action</div>
        ),
        size: 30,
        cell: ({ row }) => {
          return (
            <div className="flex items-center justify-end gap-4 text-right font-medium">
              <img
                src={AppResource.icons.ic_pen_line}
                alt=""
                className="w-[20px] cursor-pointer hover:opacity-80"
                onClick={() => {
                  navigate(`/theme/edit/${row?.original.id}`);
                }}
              />
              <AppConfirmDelete title="Delete Config">
                <img
                  src={AppResource.icons.ic_delete}
                  alt=""
                  className="w-[20px] cursor-pointer hover:opacity-80"
                />
              </AppConfirmDelete>
            </div>
          );
        },
      },
    ];
  }, [navigate]);

  return (
    <div className="p-3 bg-white mt-6 rounded-2">
      <DataTableTheme
        columns={columnTable}
        data={AppData.dataFakeTheme}
        elementHeaderRight={
          <div className="flex gap-2">
            <ButtonFullBg
              className="rounded-2 bg-primary-main py-2"
              onClick={() => {
                navigate("/theme/add");
              }}
            >
              Add Category
            </ButtonFullBg>
          </div>
        }
      />
      <AppPagination
        disabledNextPage={false}
        disabledPreviousPage={true}
        onNextPage={() => {}}
        onPreviousPage={() => {}}
      />
    </div>
  );
};
