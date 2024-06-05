import ExcelJS from "exceljs";
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
    const workbook = new ExcelJS.Workbook();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "buffer" });
        workbook.SheetNames.forEach((sheetName) => {
          let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
            blankRows: false,
            defval: "",
          });
          const dataHeaderTable = getHeaderSampleBatch();

          const headerFile = ContractHelper.get_header_row(
            workbook.Sheets[sheetName]
          );

          const result = _.isEqual(dataHeaderTable, headerFile);

          if (result === true) {
            listFileBatch.push({ data: arrFile[i], type });
          } else {
            ToastHelper.showError("Tệp tải lên chưa đúng mẫu dữ liệu ");
          }

          resolve();
        });
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsArrayBuffer(arrFile[i]);
    });
  },
};
