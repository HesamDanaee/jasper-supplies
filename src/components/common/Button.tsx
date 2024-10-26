import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "default";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconButton?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "contained",
  color = "default",
  size = "medium",
  startIcon,
  endIcon,
  iconButton = false,
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = {
    contained: "bg-blue-500 text-white border-none",
    outlined: "border border-blue-500 text-blue-500 bg-transparent",
    text: "bg-transparent text-blue-500 border-none",
  };

  const colorClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-green-500 text-white",
    default: "bg-gray-500 text-white",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const iconButtonClasses = iconButton ? "p-2" : ""; // Extra padding for icon-only buttons

  const classes = `
        ${variantClasses[variant]} 
        ${colorClasses[color]} 
        ${sizeClasses[size]} 
        ${iconButtonClasses} 
        rounded 
        hover:opacity-80 
        transition 
        flex items-center justify-center
        ${className}
      `;

  return (
    <button className={classes} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {!iconButton && children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
