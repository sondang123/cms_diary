import React, { useMemo, useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "~/components/ui/checkbox";
import { AppResource } from "~/const/AppResource";
import { useNavigate } from "react-router-dom";
import { DataTableTheme } from "./DataTableTheme";
import { AppConfirmDelete } from "~/components/AppComponent/AppConfirm/AppConfirmDelete";
import { ButtonFullBg } from "~/components/AppComponent/AppButton/ButtonFullBg";
import { AppData } from "~/const/AppData";
import { TypeTheme } from "~/const/Type/TypeTheme";
import { utils } from "~/utils";
import { AppPagination } from "~/components/AppComponent/AppPagination";
import Zoom from "react-medium-image-zoom";
import ExcelJS from "exceljs";
import * as XLSX from "xlsx";
import { Input } from "~/components/ui/input";
import { DialogTableThemeImport } from "../DialogTableThemeImport";
interface IAppProps {}

export const TableTheme: React.FC<IAppProps> = () => {
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
                <Zoom>
                  <img
                    src={row?.original?.img_preview}
                    alt="img_preview"
                    width={50}
                    className="object-contain rounded-3"
                  />
                </Zoom>
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
              <Zoom>
                <img
                  src={row.original.wall_background}
                  alt={`${row?.id}_wall_background`}
                  className="object-contain rounded-3"
                />
              </Zoom>
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
  // xuat file excel
  const handleExportExcel = async () => {
    const sheetFileName = "Danh_sach_ma_code_colors";
    const ext = ".xlsx";
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetFileName, {
      headerFooter: { firstHeader: sheetFileName },
    });
    // them tieu de file sheet
    sheet.mergeCells("A1", "N1");
    sheet.getCell("A1").value = "DANH SÁCH MÃ CODE COLORS";
    sheet.getCell("A1").font = {
      name: "Times New Roman",
      family: 4,
      size: 14,
      bold: true,
    };
    sheet.getCell("A1").alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    sheet.mergeCells("A3", "N3");

    sheet.getRow(3).height = 30;
    sheet.getRow(3).font = {
      name: "Times New Roman",
      family: 4,
      size: 12,
      bold: true,
    };
    sheet.getRow(3).alignment = {
      vertical: "middle",
      horizontal: "left",
      wrapText: true,
    };
    sheet.getRow(3).values = AppData.columnsExportDataTheme.map(
      (item) => item.header
    );
    sheet.columns = AppData.columnsExportDataTheme.map((item) => {
      return {
        key: item.key,
        width: item.width,
      };
    });

    sheet.addRow({
      id: 1,
      name: "example",
      is_light: false,
      is_premium: true,
      primary: "#FFFFFF",
      gradient_start: "#FFFFFF",
      gradient_end: "#FFFFFF",
      on_primary: "#FFFFFF",
      background: "#FFFFFF",
      glass: "#FFFFFF",
      glass_opacity: 0.2,
      record_dialog: "#FFFFFF",
      record_container: "#FFFFFF",
      record_on_container: "#FFFFFF",
      record_heading: "#FFFFFF",
      record_body_text: "#FFFFFF",
      neutral_1: "#FFFFFF",
      neutral_2: "#FFFFFF",
      neutral_3: "#FFFFFF",
      neutral_4: "#FFFFFF",
      neutral_5: "#FFFFFF",
      neutral_6: "#FFFFFF",
      neutral_7: "#FFFFFF",
      neutral_8: "#FFFFFF",
      header_icon: "#FFFFFF",
      divider: "#FFFFFF",
    });

    sheet?.eachRow((row, rowNumber) => {
      if (rowNumber >= 4) {
        row.alignment = {
          vertical: "middle",
          horizontal: "left",
          wrapText: true,
        };
        row.font = {
          name: "Times New Roman",
          family: 4,
          size: 11,
          bold: false,
        };
      }
    });

    workbook.xlsx.writeBuffer().then(function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = sheetFileName + ext;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  const [loadingImportFile, setLoadingImportFile] = useState<boolean>(false);
  const [dialogTableTheme, SetDialogTableTheme] = useState<boolean>(false);
  const [dataJsonFileTheme, setDataJsonFileTheme] = useState<TypeTheme[]>([]);

  // import file excel
  const handleImport = async (event) => {
    const fileRes = event.target.files[0];
    setLoadingImportFile(true);
    try {
      const data: any = await utils.readFileExl(fileRes);
      setDataJsonFileTheme(data);
      if (data && data?.length > 0) {
        SetDialogTableTheme(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoadingImportFile(false);
    event.target.value = null;
  };

  return (
    <div className="p-3 bg-white mt-6 rounded-2">
      <DataTableTheme
        columns={columnTable}
        data={AppData.dataFakeTheme}
        elementHeaderRight={
          <div className="flex gap-2">
            {AppData.dataFakeTheme?.length > 0 ? (
              <div className="flex items-center gap-2">
                <ButtonFullBg
                  className="rounded-2 bg-primary-main_light text-primary-main py-2 h-full"
                  onClick={() => {
                    {
                      !loadingImportFile ? handleExportExcel() : null;
                    }
                  }}
                >
                  Export sample file
                </ButtonFullBg>
                <div className="relative h-full">
                  <ButtonFullBg className="rounded-2 bg-primary-main py-2 h-full flex items-center">
                    Import File
                    {loadingImportFile ? (
                      <div className="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-white ml-2" />
                    ) : null}
                  </ButtonFullBg>

                  <Input
                    type="file"
                    className="opacity-0 absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
                    onChange={handleImport}
                  />
                </div>
              </div>
            ) : null}

            <ButtonFullBg
              className="rounded-2 bg-primary-main py-2"
              onClick={() => {
                navigate("add");
              }}
            >
              Add Theme
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
      <DialogTableThemeImport
        open={dialogTableTheme}
        onOpenChange={SetDialogTableTheme}
        data={dataJsonFileTheme}
        onCreate={() => {}}
      />
    </div>
  );
};
