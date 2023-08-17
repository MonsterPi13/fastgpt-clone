"use client";

import { Box } from "@chakra-ui/react";

import NavBar from "@/components/heroLayout/NavBar";

function HeroLayout() {
  return (
    <Box
      id="home"
      h={"100vh"}
      bg={"myWhite.600"}
      overflowY={"auto"}
      overflowX={"hidden"}
    >
      <Box position={"fixed"} zIndex={10} top={0} left={0} right={0}>
        <NavBar />
      </Box>
    </Box>
  );
}

export default HeroLayout;
