import { CSSProperties, ReactNode } from "react";

interface BoxProps {
  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  padding?: CSSProperties["padding"];
  margin?: CSSProperties["margin"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  backgroundColor?: CSSProperties["backgroundColor"];
  children?: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  display,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  margin,
  width,
  height,
  backgroundColor,
  children,
  className = "",
  ...rest
}) => {
  const styles: CSSProperties = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    padding,
    margin,
    width,
    height,
    backgroundColor,
  };

  return (
    <div style={styles} className={className} {...rest}>
      {children}
    </div>
  );
};

export default Box;
