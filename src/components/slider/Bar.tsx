import { motion } from "motion/react";
import { IBar } from "./Slider.type";
import Flex from "../common/Flex";

interface BarProps {
  props: IBar;
  activeSlide: number;
}

export default function Bar({ props }: BarProps) {
  const { initial, animate, transition, line, sliderButtons } = props;

  return (
    <Flex className="w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-1">
      <motion.svg
        width="500"
        height="296"
        viewBox="0 0 500 296"
        fill="none"
        className="absolute left-1/2 bottom-0 -translate-x-1/3 -z-1"
      >
        <motion.path
          d="M459.273 0.226318C455.773 58.2263 452 70.5 434.5 118M426.773 134.726C403.773 174.726 392.773 189.226 363.773 219.226M348.5 233.5C319 257.5 281.5 275 254 282.5M234 287.5C190.5 297 156 297 121 290.5M101.273 285.726C57.2734 273.726 40.7734 265.226 0.773437 240.226"
          initial={initial}
          animate={animate}
          transition={{
            ...transition,
            repeat:
              transition.repeat === -1
                ? Infinity
                : (transition.repeat as number),
          }}
        />
      </motion.svg>

      {/* - * - * - Moving Circle - * - * - */}
      <motion.div
        className="w-1 absolute left-1/2 top-full -translate-x-1/2 -translate-y-full origin-top z-1"
        initial={line.initial}
        animate={line.animate}
        transition={{
          ...line.transition,
          repeat:
            line.transition.repeat === -1
              ? Infinity
              : (line.transition.repeat as number),
        }}
      >
        <motion.div
          className="w-5 h-5 border-[1px] rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
          initial={line.dot.initial}
          animate={line.dot.animate}
          transition={{
            ...line.dot.transition,

            repeat:
              line.dot.transition.repeat === -1
                ? Infinity
                : (line.dot.transition.repeat as number),
          }}
        />
      </motion.div>

      {/* - * - * - Circles - * - * - */}

      {sliderButtons.buttons.map((className, z) => (
        <motion.div
          key={z}
          initial={sliderButtons.initial}
          animate={sliderButtons.animate}
          transition={sliderButtons.transition}
          whileHover={sliderButtons.whileHover}
        />
      ))}
    </Flex>
  );
}
