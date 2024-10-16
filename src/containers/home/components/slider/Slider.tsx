"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Slider() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div
      animate={{ x: 100 }}
      drag="x"
      style={{ x, opacity }}
      layout
      onClick={() => animate(".boxes", { opacity: 0 })}
      className="w-96 h-96 border-2 border-black boxes"
    ></motion.div>
  );
}
