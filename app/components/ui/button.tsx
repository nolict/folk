import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "pill";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-[#242424] text-white hover:opacity-70",
      secondary: "bg-white text-[#242424] shadow-card hover:bg-gray-50",
      ghost: "bg-transparent text-[#242424] hover:bg-gray-100",
      pill: "bg-[#242424] text-white rounded-full hover:opacity-70",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
    };

    const variantStyles = variants[variant];
    const sizeStyles = variant === "pill" ? "px-6 py-2 text-base" : sizes[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
