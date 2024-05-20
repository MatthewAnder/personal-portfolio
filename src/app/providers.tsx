"use client";

import { ChakraProvider } from "@chakra-ui/react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Fonts from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
//Custom themes
import { theme } from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ActiveSectionContextProvider>
        <Fonts />
        <SpeedInsights />
        {children}
      </ActiveSectionContextProvider>
    </ChakraProvider>
  );
}
