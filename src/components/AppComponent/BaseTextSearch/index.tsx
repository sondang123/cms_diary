import { Search } from "lucide-react";
import React from "react";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
interface IProps {
  iconRight?: React.ReactNode;
}
export const BaseTextSearch: React.FC<InputProps & IProps> = ({
  placeholder,
  type,
  className,
  iconRight,
  ...props
}) => {
  return (
    <div className="flex items-center rounded-lg border border-main-neutral-200 bg-neutral-2 px-3 focus-within:ring-1 focus-within:ring-neutral-600">
      <Search className="mr-1 h-6 w-6 shrink-0 text-main-neutral-400 opacity-50" />
      <Input
        type={type}
        placeholder={placeholder}
        {...props}
        className={cn("border-none pl-1 bg-neutral-2", className)}
      />
      {iconRight}
    </div>
  );
};
