"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider as ChakraProviderWrapper,
  ColorModeScript,
} from "@chakra-ui/react";

import { theme } from "@/constants/theme";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProviderWrapper theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProviderWrapper>
    </CacheProvider>
  );
}
