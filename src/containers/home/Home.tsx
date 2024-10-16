import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Typography from "@/components/Typography";
import React from "react";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Flex className="bg-blue-200">
        <Typography>Home page</Typography>
      </Flex>
    </Container>
  );
}
