<<<<<<< HEAD
=======
"use client";

>>>>>>> parent of 8ce5581 (chore: vercel speed insight)
import { ChakraProvider } from "@chakra-ui/react";
//Custom themes
import { theme } from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
