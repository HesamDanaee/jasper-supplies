"use client";

import Box from "@/components/common/Box";
import Flex from "@/components/common/Flex";
import Typography from "@/components/common/Typography";
import React, { useRef } from "react";
import sections from "@/public/data.json";
import List from "@/components/common/List";
import Container from "@/components/common/Container";
import Image from "next/image";
import Hero from "./sections/Hero";
import { cn } from "@/libs/classNames";
import Button from "@/components/common/Button";
import { motion } from "motion/react";

export default function Home() {
  const {
    pages: {
      home: { content_blocks },
    },
  } = sections;
  const scrollRef = useRef(null);
  return (
    <Box className="h-auto bg-background">
      <Hero />

      <Flex>
        <Flex
          align="center"
          justify="center"
          className="w-full h-auto pt-32 pb-12"
        >
          <Container maxWidth="7xl">
            <List
              className="flex-col gap-y-12"
              list={content_blocks}
              callback={({
                title,
                subtitle,
                description,
                cta,
                photo,
                block_name,
              }) => (
                <Flex
                  className={cn(
                    block_name === "treasures"
                      ? "flex-row-reverse"
                      : "flex-row",
                    "flex-wrap max-md:px-10 max-sm:px-3"
                  )}
                >
                  {/* - * - * -  - * - * - */}
                  <motion.div
                    className={cn("basis-1/2 max-md:basis-full")}
                    initial={{ opacity: 0, translateY: "15%" }}
                    whileInView={{
                      translateY: "0%",
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        ease: "backOut",
                      },
                    }}
                    viewport={{ root: scrollRef, once: true }}
                  >
                    <Flex
                      direction="column"
                      gap="gap-y-12 py-20 max-md:gap-y-4"
                    >
                      <Typography
                        variant="h1"
                        fontWeight="black"
                        color="text-primary"
                        className="text-6xl max-md:text-3xl tracking-widest"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="h4"
                        color="text-secondary"
                        className="font-normal italic relative after:w-1 after:h-full after:absolute after:left-0 after:top-0 after:bg-secondary after:-translate-x-2"
                      >
                        {subtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="normal"
                        color="text-gray"
                      >
                        {description}
                      </Typography>

                      <Button className="w-1/2 !bg-primary">
                        <Typography color="text-snow">{cta}</Typography>
                      </Button>
                    </Flex>
                  </motion.div>

                  <motion.div
                    className="basis-1/2 max-md:basis-full justify-center items-center"
                    initial={{ opacity: 0, translateY: "10%" }}
                    whileInView={{
                      translateY: "0%",
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        ease: "backOut",
                      },
                    }}
                    viewport={{ root: scrollRef, once: true }}
                  >
                    <Flex direction="column" gap="gap-y-4 py-20">
                      <Image
                        src={photo}
                        width={1000}
                        height={1000}
                        className="w-auto h-auto"
                        alt={block_name}
                      />
                    </Flex>
                  </motion.div>
                </Flex>
              )}
            />
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
}
