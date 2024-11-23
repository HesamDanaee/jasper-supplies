"use client";

import Flex from "../common/Flex";
import Blob from "./Blob";
import Slide from "./Slide";
import { ISlider } from "./Slider.type";
import { useState } from "react";
import useTimer from "@/hooks/useTimer";
import Bar from "./Bar";

interface SliderProps {
  props: ISlider;
}

export default function Slider({ props }: SliderProps) {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleChangeSlide = () =>
    setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));

  const { blobs, slides, bar, colors } = props;

  useTimer({
    duration: 5,
    onExpire: () =>
      setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1)),
  });

  return (
    <Flex className="w-[500px] h-[500px] max-md:w-[350px] max-md:h-[350px] relative">
      {/* - * - * - Blob - * - * - */}

      {/* <Blob
        blobs={blobs}
        color={
          {
            biscuits: "fill-biscuits",
            sea: "fill-sea",
            animal: "fill-animal",
            herbs: "fill-herbs",
            honey: "fill-honey",
            nuts: "fill-nuts",
          }[colors[activeSlide - 1]]
        }
      /> */}

      {/* - * - * - Slides - * - * - */}

      <Flex className="w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] bg-transparent rounded-full z-10">
        <Slide
          slide={slides[activeSlide - 1]}
          changeSlide={handleChangeSlide}
        />
      </Flex>

      <Bar props={bar} activeSlide={activeSlide} />
    </Flex>
  );
}
