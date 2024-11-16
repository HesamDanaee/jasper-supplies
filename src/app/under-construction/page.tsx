import Flex from "@/components/common/Flex";
import Image from "next/image";
import React from "react";

import illustration from "@/public/assets/under-construction.svg";
import Typography from "@/components/common/Typography";

export default function UnderConstruction() {
  return (
    <Flex
      className="w-screen h-screen bg-gray-500"
      align="center"
      justify="center"
    >
      <Flex
        className="w-1/2 h-1/2 text-center flex-col"
        align="center"
        justify="center"
        gap="gap-y-12"
      >
        <Flex className="flex-col" align="center" gap="gap-y-4">
          <Typography variant="h2" className="tracking-wider" fontWeight="bold">
            We&apos;re Working on Something Exciting!
          </Typography>
          <Typography variant="body1" fontWeight="light">
            Our website is currently under construction, but we can&apos;t wait
            to unveil the new experience we&apos;re crafting just for you.
            Please check back soon for something truly special!
          </Typography>
        </Flex>

        <Image
          src={illustration}
          width={1000}
          height={1000}
          alt="under-construction"
          className="w-[500px] h-auto"
        />
      </Flex>
    </Flex>
  );
}
