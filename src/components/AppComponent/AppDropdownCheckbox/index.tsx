import { ChevronDown } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { TypeDropdown } from "~/const/Type/AppType";

interface IProps {
  option: TypeDropdown[];
  onChange?: (item: TypeDropdown) => void;
  value?: string;
  menuContentProps?: object;
  customDropdownMenuTrigger?: React.ReactNode;
}
export const AppDropdownCheckbox: React.FC<IProps> = ({
  option,
  onChange = () => {},
  value,
  menuContentProps,
  customDropdownMenuTrigger,
}) => {
  return (
    <DropdownMenu>
      {customDropdownMenuTrigger ? (
        customDropdownMenuTrigger
      ) : (
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="text-s14-w400 text-main-neutral-700 w-full flex justify-between"
          >
            {value}
            <ChevronDown className="ml-5 h-4 w-4 text-main-neutral-400" />
          </Button>
        </DropdownMenuTrigger>
      )}
      <DropdownMenuContent
        {...menuContentProps}
        className="max-h-[--radix-dropdown-menu-content-available-height] min-w-[--radix-dropdown-menu-trigger-width]"
      >
        {option?.map((item, index) => (
          <DropdownMenuCheckboxItem
            checked={item?.value === value}
            onCheckedChange={() => {
              onChange(item);
            }}
            key={index}
          >
            {item?.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
