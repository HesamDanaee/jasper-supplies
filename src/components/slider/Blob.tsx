import { cn } from "@/libs/classNames";
import { motion } from "framer-motion";
import { IBlobs } from "./Slider.type";

interface BlobProps {
  blobs: IBlobs;
  color: string;
}

export default function Blob({ blobs, color }: BlobProps) {
  const { initial, animate, transition } = blobs;

  return (
    <motion.svg
      className={cn(
        "w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1",
        color
      )}
      viewBox="0 0 500 500"
    >
      {/* Define a filter for the shadow */}
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            floodColor="rgba(0, 0, 0, 0.1)"
          />
        </filter>
      </defs>

      <motion.path
        initial={initial}
        animate={animate}
        transition={{
          ...transition,
          repeat:
            transition.repeat === -1 ? Infinity : (transition.repeat as number),
        }}
        filter="url(#shadow)"
      />
    </motion.svg>
  );
}
