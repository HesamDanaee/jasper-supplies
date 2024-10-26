import { HTMLAttributes, ReactNode } from "react";
import {
  justifyClasses,
  alignClasses,
  directionClasses,
  wrapClasses,
} from "@/libs/styles";
import { cn } from "@/libs/classNames";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string;
}

export default function Flex({
  children,
  justify = "start",
  align = "stretch",
  direction = "row",
  wrap = "nowrap",
  gap = "gap-0",
  className,
  ...rest
}: FlexProps) {
  const classes = cn(
    "flex",
    directionClasses[direction],
    wrapClasses[wrap],
    justifyClasses[justify],
    alignClasses[align],
    gap,
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
