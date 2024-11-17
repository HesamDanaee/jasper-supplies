import React from "react";
import { motion, Transition, SVGMotionProps, MotionProps } from "framer-motion";
import Flex from "@/components/common/Flex";

interface Props extends SVGMotionProps<MotionProps> {
  width?: number;
  height?: number;
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition | undefined;
  lineProps?: Record<string, Transition | string | number | undefined> | null;
  onClick: () => void;
}

export default function MenuButton({
  isOpen = false,
  width = 20,
  height = 20,
  strokeWidth = 1,
  color = "#000",
  transition = undefined,
  lineProps = null,
  onClick,
  ...props
}: Props) {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 5;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <Flex
      onClick={onClick}
      className="w-[40px] h-[40px] cursor-pointer bg-snow shadow-sm rounded-full justify-center items-center"
    >
      {/* @ts-expect-error resolve later */}
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </Flex>
  );
}
