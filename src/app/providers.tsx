"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./fonts";
//Custom themes
import { theme } from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
