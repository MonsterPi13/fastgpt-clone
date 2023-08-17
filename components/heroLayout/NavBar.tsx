"use client";

import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const {
    isOpen: isOpenCommunity,
    onOpen: onOpenCommunity,
    onClose: onCloseCommunity,
  } = useDisclosure();
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();

  const bgOpacity = useMemo(() => {
    const rate = scrollTop / 120 > 0.7 ? 0.7 : scrollTop / 120 > 0.7;
    return rate;
  }, [scrollTop]);

  const menuStyles: BoxProps = {
    mr: 4,
    px: 5,
    py: 2,
    cursor: "pointer",
    transition: "0.5s",
    borderRadius: "xl",
    fontSize: "lg",
    _hover: {
      bg: "myGray.100",
    },
  };

  const menuList = useMemo(
    () => [
      {
        label: "Community",
        key: "community",
        onClick: () => {
          onOpenCommunity();
        },
      },
      {
        label: "Docs",
        key: "Docs",
        onClick: () => {
          window.open("https://doc.fastgpt.run/docs/intro");
        },
      },
    ],
    [onOpenCommunity]
  );

  useEffect(() => {
    const scrollEvent = (e: any) => {
      setScrollTop(e?.target?.scrollTop);
    };

    const dom = document.getElementById("home");

    if (!dom) return;

    dom.addEventListener("scroll", scrollEvent);

    return () => {
      dom.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <Box
      bg={`rgba(255, 255, 255, ${bgOpacity})`}
      backdropFilter={"blur(24px)"}
      py={[3, 5]}
      px={5}
      transition={"0.4s ease"}
      h={isOpenMenu ? "100vh" : "auto"}
    >
      <Flex maxW={"1300px"} m={"auto"} alignItems={"center"}>
        <Avatar src="/images/logo.svg" w={["30px", "42px"]} />
        <Box
          className="textlg"
          fontSize={["3xl", "4xl"]}
          fontWeight={"bold"}
          ml={3}
          fontStyle={"italic"}
        >
          FastGPT
        </Box>
        <Box flex={1} />
        {menuList.map((menu) => (
          <Box key={menu.key} {...menuStyles} onClick={menu.onClick}>
            {menu.label}
          </Box>
        ))}
        <Box px={4} color={"myGray.500"}>
          |
        </Box>
        <Box {...menuStyles} onClick={() => router.push("/login")}>
          Login
        </Box>
        <Button
          ml={4}
          h={"36px"}
          borderRadius={"3xl"}
          onClick={() => router.push("/app/list")}
        >
          Start Now
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
