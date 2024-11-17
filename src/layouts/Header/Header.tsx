"use client";
import { motion } from "framer-motion";
import Flex from "@/components/common/Flex";
import List from "@/components/common/List";
import Typography from "@/components/common/Typography";
import data from "@/public/data.json";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import "./style.css";
import { Phone } from "@phosphor-icons/react";
import Button from "@/components/common/Button";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/libs/classNames";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import Container from "@/components/common/Container";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [passedHeight, setPassedHeight] = useState(false);
  const {
    header: { navigation, cta },
  } = data;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const header = document.querySelector("#header");

    return header
      ? latest > header?.clientHeight
        ? setPassedHeight(true)
        : setPassedHeight(false)
      : null;
  });

  return (
    <Flex
      align="center"
      justify="center"
      className={cn(
        "w-screen px-10 fixed top-0 transition duration-200 ease-in-out",
        passedHeight ? "-translate-y-full" : "translate-0"
      )}
      id="header"
    >
      <Container maxWidth="full">
        <Flex align="center" justify="between" className="w-full">
          <Flex
            align="center"
            justify="center"
            className="basis-1/6 max-md:basis-3/6 max-md:justify-start"
          >
            {/* - * - * - Logo - * - * - */}
            <Link href="/">
              <Image
                alt="logo"
                src={logo}
                width={200}
                height={200}
                className="w-16 h-16 md:min-w-16 md:min-h-16 max-md:w-13 max-md:h-13 relative before:w-full before:h-2 before:bg-secondary before:absolute before:top-0 before:left-0"
              />
            </Link>
          </Flex>

          {/* - * - * - Navigation - * - * - */}
          <Flex
            align="center"
            justify="center"
            gap="gap-x-4"
            className="basis-4/6 max-md:hidden"
          >
            <List
              list={navigation.links}
              className="gap-x-7 items-center py-10"
              callback={({ name, url }, index) => (
                <Link
                  key={`${name}-${index}`}
                  href={url}
                  className={cn(
                    "link",
                    index === navigation.links.length - 1
                      ? "max-2xl:hidden"
                      : index === navigation.links.length - 2
                      ? "max-xl:hidden"
                      : index === navigation.links.length - 3
                      ? "max-lg:hidden"
                      : "max-md:hidden"
                  )}
                >
                  <Typography
                    variant="h6"
                    fontWeight="normal"
                    className="uppercase max-lg:text-sm max-md:text-xs"
                  >
                    <motion.div
                      initial={navigation.initial}
                      animate={navigation.animate}
                      transition={{
                        ...navigation.transition,
                        repeat:
                          navigation.transition.repeat === -1
                            ? Infinity
                            : (navigation.transition.repeat as number),
                      }}
                    >
                      {name}
                    </motion.div>
                  </Typography>
                </Link>
              )}
            />
          </Flex>
          {/* - * - * - CTA Buttons - * - * - */}
          <Flex
            align="center"
            justify="center"
            className="w-full basis-1/6 max-md:hidden"
          >
            <List
              className="gap-x-4"
              list={cta}
              callback={({ name, url, options }) =>
                url ? (
                  <Link href={url}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Phone className="w-6 h-6 text-snow" />}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        className="max-md:text-sm"
                        color="text-snow"
                      >
                        {name}
                      </Typography>
                    </Button>
                  </Link>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="py-2 px-3 rounded-sm bg-primary">
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        className="max-md:text-sm"
                        color="text-snow"
                      >
                        {name}
                      </Typography>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-auto ">
                      {options?.map(({ name, id }) => (
                        <DropdownMenuItem key={id}>{name}</DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
            />
          </Flex>

          <Flex
            align="center"
            justify="end"
            className="basis-3/6 justify-end hidden max-md:flex"
          >
            {/* - * - * - BurgerMenu - * - * - */}
            <BurgerMenu />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
