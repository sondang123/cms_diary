import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { Button } from "~/components/ui/button";

interface AppConfirmDeleteProps {
  children?: React.ReactNode | string;
  title?: string;
  subTitle?: string;
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<any>>;
  onDelete?: () => void;
}
export const AppConfirmDelete: React.FC<AppConfirmDeleteProps> = ({
  children,
  title = "Confirm Delete",
  subTitle = "Are you sure you want to delete?",
  open,
  onOpenChange = () => {},
  onDelete = () => {},
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button
              onClick={onDelete}
              className="bg-primary-main hover:bg-primary-main hover:opacity-80"
            >
              OK
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
