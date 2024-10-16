import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: string;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

export default function Container({
  children,
  maxWidth = "md",
  padding = "p-4",
}: ContainerProps) {
  return (
    <div className={`${maxWidthClasses[maxWidth]} ${padding} mx-auto`}>
      {children}
    </div>
  );
}
