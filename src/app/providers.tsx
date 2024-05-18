"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChakraProvider } from "@chakra-ui/react";
//Custom themes
import { theme } from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <SpeedInsights />
      {children}
    </ChakraProvider>
  );
}
