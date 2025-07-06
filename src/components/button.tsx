import React, { forwardRef } from "react";

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "icon";
};

const buttonVariants = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-black",
  icon: "h-[1.25rem] w-[1.25rem] flex items-center justify-center",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded font-medium ${
          variant === buttonVariants[variant]
        } ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // necessário para evitar warning no DevTools

export default Button;
