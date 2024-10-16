import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  spacing?: number; // For gap between grid items
  xs?: number; // Column width for extra-small screens (1-12)
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  container = false,
  item = false,
  spacing = 0,
  xs = 12,
  sm,
  md,
  lg,
  xl,
  className = "",
}) => {
  const containerClasses = container ? `grid grid-cols-12 gap-${spacing}` : "";
  const itemClasses = item ? `${getResponsiveClasses(xs, sm, md, lg, xl)}` : "";

  const classes = `${containerClasses} ${itemClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

const getResponsiveClasses = (
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number
) => {
  const responsiveClasses = [
    xs ? `col-span-${xs}` : "",
    sm ? `sm:col-span-${sm}` : "",
    md ? `md:col-span-${md}` : "",
    lg ? `lg:col-span-${lg}` : "",
    xl ? `xl:col-span-${xl}` : "",
  ];

  return responsiveClasses.filter(Boolean).join(" ");
};

export default Grid;
