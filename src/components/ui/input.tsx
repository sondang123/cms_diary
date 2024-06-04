import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "caret-main-primary typo-s14-w400 flex h-10 w-full appearance-none rounded-lg border border-main-neutral-200 bg-background px-3 py-2 leading-tight text-main-neutral-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-main-neutral-400  focus:border-main-neutral-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
