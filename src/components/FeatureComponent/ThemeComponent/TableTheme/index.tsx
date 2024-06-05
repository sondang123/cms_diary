import React, { useMemo } from "react";
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
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
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
    const columns = [
      {
        header: "Name",
        key: "name",
        width: 20,
      },
      {
        header: "isLight",
        key: "is_light",
        width: 18,
      },
      {
        header: "isPremiun",
        key: "is_premium",
        width: 18,
      },
      {
        header: "primary",
        key: "primary",
        width: 18,
      },
      {
        header: "gradientStart",
        key: "gradient_start",
        width: 18,
      },
      {
        header: "gradientEnd",
        key: "gradient_end",
        width: 18,
      },
      {
        header: "onPrimary",
        key: "on_primary",
        width: 18,
      },
      {
        header: "background",
        key: "background",
        width: 18,
      },
      {
        header: "glass",
        key: "glass",
        width: 18,
      },
      {
        header: "glassOpacity",
        key: "glass_opacity",
        width: 18,
      },
      {
        header: "recordDialog",
        key: "record_dialog",
        width: 18,
      },
      {
        header: "recordContainer",
        key: "record_container",
        width: 18,
      },

      {
        header: "recordOnContainer",
        key: "record_on_container",
        width: 24,
      },
      {
        header: "recordHeading",
        key: "record_heading",
        width: 18,
      },
      {
        header: "recordBodyText",
        key: "record_body_text",
        width: 18,
      },
      {
        header: "neutral1",
        key: "neutral_1",
        width: 18,
      },
      {
        header: "neutral2",
        key: "neutral_2",
        width: 18,
      },
      {
        header: "neutral3",
        key: "neutral_3",
        width: 18,
      },
      {
        header: "neutral4",
        key: "neutral_4",
        width: 18,
      },
      {
        header: "neutral5",
        key: "neutral_5",
        width: 18,
      },
      {
        header: "neutral6",
        key: "neutral_6",
        width: 18,
      },
      {
        header: "neutral7",
        key: "neutral_7",
        width: 18,
      },
      {
        header: "neutral8",
        key: "neutral_8",
        width: 18,
      },
      {
        header: "headerIcon",
        key: "header_icon",
        width: 18,
      },
      {
        header: "divider",
        key: "divider",
        width: 18,
      },
    ];
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
    sheet.getRow(3).values = columns.map((item) => item.header);
    sheet.columns = columns.map((item) => {
      return {
        key: item.key,
        width: item.width,
      };
    });

    sheet.addRow({
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

  const handleImport = async (event) => {
    const fileRes = event.target.files[0];

    try {
      const data = await utils.readFileExl(fileRes);
      console.log("Data from Excel:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-3 bg-white mt-6 rounded-2">
      <DataTableTheme
        columns={columnTable}
        data={AppData.dataFakeTheme}
        elementHeaderRight={
          <div className="flex gap-2">
            <ButtonFullBg
              className="rounded-2 bg-primary-main_light text-primary-main py-2"
              onClick={() => {
                handleExportExcel();
              }}
            >
              Export sample file
            </ButtonFullBg>
            <div className="relative">
              <ButtonFullBg className="rounded-2 bg-primary-main py-2 h-full">
                Import File
              </ButtonFullBg>

              <Input
                type="file"
                className="opacity-0 absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
                onChange={handleImport}
              />
            </div>
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
    </div>
  );
};
