import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "default" | "none";
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
    contained: "bg-primary text-foreground border-none rounded-xs",
    outlined:
      "border border-text-tertiary text-tertiary bg-transparent rounded-xs",
    text: "bg-transparent text-tertiary border-none rounded-xs",
  };

  const colorClasses = {
    primary: "bg-primary text-foreground",
    secondary: "bg-secondary text-foreground",
    default: "bg-tertiary text-foreground",
    none: "bg-transparent text-",
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
