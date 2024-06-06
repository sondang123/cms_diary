import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { AppData } from "~/const/AppData";
import { AppResource } from "~/const/AppResource";
import { TypeTheme } from "~/const/Type/TypeTheme";
interface IProps {
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<any>>;
  data?: TypeTheme[];
  onCreate?: React.Dispatch<React.SetStateAction<any>>;
}
export const DialogTableThemeImport: React.FC<IProps> = ({
  open,
  onOpenChange,
  data,
  onCreate,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90%]">
        <DialogHeader>
          <DialogTitle className="typo-s24-w700">
            Theme’s color code
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-auto h-[50vh]">
          <Table>
            <TableHeader className="sticky top-0 bg-white shadow-sm z-100">
              <TableRow>
                {AppData.columnsExportDataTheme?.map((item, index) => (
                  <TableHead className="w-[200px]" key={index}>
                    {item?.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && data?.length > 0 ? (
                data?.map((item, index) => (
                  <TableRow key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <TableCell className="font-medium" key={key}>
                        {value?.toString()}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={AppData.columnsExportDataTheme?.length}
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
        <DialogFooter className="">
          <div className="flex gap-2 items-center">
            <DialogClose>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="bg-primary-main hover:bg-primary-main hover:opacity-80"
              onClick={onCreate}
            >
              Create
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
