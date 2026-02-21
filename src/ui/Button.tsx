import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
} 

const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  return (
    <button
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    />
  );
}