import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary"| "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  variant = 'primary',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={cn(
        `
        w-auto 
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        hover:opacity-75
        transition
        flex
        items-center
        justify-center
        gap-2
        rounded-md
        `,
        variant === "primary" ? 'bg-primary text-white' : '',
        variant === "secondary" ? 'bg-grey text-primary' : '',
        disabled && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;