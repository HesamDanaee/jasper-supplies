import Box from "@/components/common/Box";
import Flex from "@/components/common/Flex";
import Typography from "@/components/common/Typography";
import React from "react";
import sections from "@/public/data.json";
import List from "@/components/common/List";
import Container from "@/components/common/Container";
import Image from "next/image";
import Hero from "./sections/Hero";
import { cn } from "@/libs/classNames";
import Button from "@/components/common/Button";

export default function Home() {
  const {
    pages: {
      home: {
        content_blocks,
        hero: { slider },
      },
    },
  } = sections;

  return (
    <Box className="h-auto !bg-white">
      <Hero />

      <Flex className="bg-foreground/5">
        <Flex
          align="center"
          justify="center"
          className="w-full h-auto pt-[240px] pb-12"
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
                    block_name === "treasures" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <Flex
                    className={cn("basis-1/2")}
                    direction="column"
                    gap="gap-y-12 py-20"
                  >
                    <Typography
                      variant="h1"
                      fontWeight="black"
                      color="text-primary"
                      className="text-6xl tracking-widest"
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

                  <Flex
                    className="basis-1/2 justify-center items-center"
                    direction="column"
                    gap="gap-y-4 py-20"
                  >
                    <Image
                      src={photo}
                      width={1000}
                      height={1000}
                      className="w-auto h-auto"
                      alt={block_name}
                    />
                  </Flex>
                </Flex>
              )}
            />
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
}
