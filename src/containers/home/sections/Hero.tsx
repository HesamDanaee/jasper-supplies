"use client";
import Box from "@/components/common/Box";
import Slider from "@/components/slider/Slider";
import React from "react";
import heroData from "@/public/data.json";
import { motion } from "framer-motion";

export default function Hero() {
  const {
    motion: { initial, animate, transition },
    slider,
  } = heroData.pages.home.hero;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        ...transition,
        repeat: transition.repeat === -1 ? Infinity : transition.repeat,
      }}
      className="w-full h-[60dvh] flex justify-center items-center"
    >
      <Box className="w-[500px] h-[500px] max-md:w-[350px] max-md:h-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* @ts-expect-error change it later */}
        <Slider props={slider} />
      </Box>
    </motion.div>
  );
}
