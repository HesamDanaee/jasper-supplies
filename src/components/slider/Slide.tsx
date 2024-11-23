import { motion, AnimatePresence } from "motion/react";
import { ISlide } from "./Slider.type";
import List from "../common/List";

interface SlideProps {
  slide: ISlide;
  changeSlide: () => void;
}

export default function Slide({ slide: { name, items } }: SlideProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={name}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5, ease: "circInOut" },
          duration: 1,
          ease: "circInOut",
          repeat: Infinity,
        }}
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.1, ease: [0.17, 0.1, 0.17, 0.17] },
        }}
        className="absolute w-full h-full left-0 top-0 right-0 bottom-0 flex justify-center items-center origin-center cursor-pointer"
      >
        <List
          list={items}
          callback={({ name, src, initial, animate, transition, exit }) => (
            <motion.div
              key={name}
              className="w-auto h-auto absolute top-1/2 left-1/2"
              initial={initial}
              animate={animate}
              transition={transition}
              exit={exit}
            >
              <motion.img
                src={src}
                width={400}
                height={400}
                className="w-auto h-auto"
                alt={name}
              />
            </motion.div>
          )}
        />
      </motion.div>
    </AnimatePresence>
  );
}
