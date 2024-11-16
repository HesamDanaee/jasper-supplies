"use client";

import Flex from "@/components/common/Flex";
import Image from "next/image";
import {
  InstagramLogo,
  XLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import jsonData from "@/public/data.json";
import List from "@/components/common/List";
import Link from "next/link";
import Typography from "@/components/common/Typography";
import Container from "@/components/common/Container";
import { Separator } from "@/components/common/separator";

export default function Footer() {
  const {
    footer: { main, bottom },
  } = jsonData;

  return (
    <footer className="flex w-full justify-center items-center bg-background">
      <Flex className="w-full h-full" justify="between" direction="column">
        <Container maxWidth="7xl">
          <Flex
            className="w-full py-12 max-lg:flex-col max-lg:items-center gap-y-10"
            justify="between"
          >
            <Flex
              className="max-lg:w-full lg:basis-1/2 max-lg:flex-row max-lg:items-center gap-x-10"
              justify="center"
              align="start"
              direction="column"
              gap="gap-y-2"
            >
              <Image
                src={main.company.logo}
                width={300}
                height={300}
                alt="logo"
                className="w-14 h-w-14 drop-shadow-2xl"
              />

              <Typography variant="h4" color="text-secondary">
                {main.company.slogan}
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {main.company.signature}
              </Typography>

              <Separator orientation="horizontal" />

              <List
                className="max-lg:w-full lg:basis-2/5 gap-x-6 justify-center items-start flex-col"
                list={main["contact-details"]}
                callback={({ name, value, link }) => (
                  <Flex
                    direction="row"
                    justify="evenly"
                    gap="gap-x-1"
                    className="items-center"
                  >
                    <Typography
                      variant="h6"
                      color="text-foreground"
                      fontWeight="medium"
                    >
                      {name}
                    </Typography>
                    :
                    <Link href={link}>
                      <Typography
                        variant="body2"
                        color="text-gray"
                        fontWeight="normal"
                      >
                        {value}
                      </Typography>
                    </Link>
                  </Flex>
                )}
              />
            </Flex>

            <List
              className="max-lg:w-full lg:basis-1/2 gap-x-6 justify-evenly items-start"
              list={main.links}
              callback={({ title, links }) => (
                <Flex direction="column" justify="evenly" gap="gap-y-4">
                  <Typography
                    variant="body2"
                    color="text-foreground"
                    fontWeight="medium"
                  >
                    {title}
                  </Typography>
                  <List
                    className="gap-x-6 flex-col gap-y-4 group"
                    list={links}
                    callback={({ name, url }) => (
                      <Link href={url}>
                        <Typography
                          color="text-foreground"
                          className=" group-hover:text-foreground/50 hover:!text-foreground transition duration-100 ease-in"
                          fontWeight="medium"
                        >
                          {name}
                        </Typography>
                      </Link>
                    )}
                  />
                </Flex>
              )}
            />
          </Flex>
        </Container>

        <Flex className="bg-secondary">
          <Container maxWidth="7xl" padding="p-5">
            <Flex
              className="w-full justify-between"
              direction="row"
              align="center"
              justify="between"
            >
              <List
                className="gap-x-6"
                list={bottom.socials}
                callback={({ name, url }) => (
                  <Link href={url}>
                    {
                      ((className) => ({
                        instagram: <InstagramLogo className={className} />,
                        linkedin: <LinkedinLogo className={className} />,
                        x: <XLogo className={className} />,
                        youtube: <YoutubeLogo className={className} />,
                      }))(
                        "w-6 h-6 text-background hover:text-primary duration-100 ease-in"
                      )[name as "instagram" | "linkedin" | "x" | "youtube"]
                    }
                  </Link>
                )}
              />

              <Typography
                variant="caption"
                color="text-background"
                fontWeight="light"
              >
                {bottom.copyright}
              </Typography>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </footer>
  );
}
