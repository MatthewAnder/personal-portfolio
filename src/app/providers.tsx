"use client";

import { ChakraProvider } from "@chakra-ui/react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Fonts from "./fonts";
//Custom themes
import { theme } from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ActiveSectionContextProvider>
        <Fonts />
        {children}
      </ActiveSectionContextProvider>
    </ChakraProvider>
  );
}
