"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as ChakraProviderWrapper } from "@chakra-ui/react";

import { theme } from "@/constants/theme";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProviderWrapper theme={theme}>{children}</ChakraProviderWrapper>
    </CacheProvider>
  );
}
