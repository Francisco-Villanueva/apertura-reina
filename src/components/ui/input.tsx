import * as React from "react";

import { cn } from "@/lib/utils";
type InputVariants = "primary" | "secondary";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "primary", ...props }, ref) => {
    const style: Record<InputVariants, string> = {
      primary: "bg-primary border border-input/50 text-secondary",
      secondary: "",
    };
    return (
      <input
        type={type}
        className={cn(
          `flex  w-full px-3 py-2  file:border-0 file:bg-transparent file:text-sm file:font-medium rounded-md text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${style[variant]}`,
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
