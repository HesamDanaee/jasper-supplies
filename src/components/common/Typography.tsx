import { cn } from "@/libs/classNames";
import { ReactNode, HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
  children: ReactNode;
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black"
    | "extrablack";
  className?: string;
}

const getVariantTag = (variant: TypographyProps["variant"]) => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "body1":
    case "body2":
      return "p";
    case "caption":
      return "span";
    default:
      return "p";
  }
};

const getVariantClasses = (
  variant: TypographyProps["variant"],
  className: string
) => {
  const baseClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
    body1: "text-base",
    body2: "text-sm",
    caption: "text-xs",
  };

  return `${baseClasses[variant ?? "body1"]} ${className}`;
};

const fontWeightClasses = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black",
  extrablack: "font-extrablack",
};

function Typography({
  variant = "body1",
  children,
  fontWeight,
  color,
  className = "",
  ...rest
}: TypographyProps) {
  const Tag = getVariantTag(variant);

  return (
    <Tag
      className={cn(
        getVariantClasses(variant, className),
        fontWeight ? fontWeightClasses[fontWeight] : "",
        color ?? "text-foreground"
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Typography;
