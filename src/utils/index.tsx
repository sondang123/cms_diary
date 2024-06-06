import ExcelJS from "exceljs";
import * as XLSX from "xlsx";
export const utils = {
  renderStatusTheme: (params: string) => {
    switch (params) {
      case "active":
        break;

      default:
        return (
          <span className="typo-s15-w600 text-primary-2 py-1 px-2 rounded-2 bg-[#EAFAE4]">
            Active
          </span>
        );
        break;
    }
  },
  readFileExl: async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = (e: any) => {
        const binarystr = new Uint8Array(e.target.result);
        const wb = XLSX.read(binarystr, {
          type: "array",
          raw: true,
          cellFormula: false,
        });
        const wsname = wb.SheetNames[0];
        const data = XLSX.utils.sheet_to_json(wb.Sheets[wsname], {
          header: 2,
          range: 2,
        });
        resolve(data);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  },
};
