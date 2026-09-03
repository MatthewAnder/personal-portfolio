import { extendTheme } from "@chakra-ui/react";

import { Cormorant_Garamond, Inter } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});
const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const theme = extendTheme({
  Link: {
    baseStyle: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },

  styles: {
    global: {
      "html, body": {
        backgroundColor: "#f6f3ee",
      },
      p: {
        color: "#1c1a17",
      },
      h1: {
        color: "#1c1a17",
      },
    },
  },

  fonts: {
    heading: headingFont.style.fontFamily,
    body: bodyFont.style.fontFamily,
  },

  components: {
    Button: {
      baseStyle: {
        letterSpacing: "0.08em",
        fontWeight: "500",
        _focus: { boxShadow: "none" },
      },
    },
    Input: {
      variants: {
        flushed: {
          field: {
            _focus: { boxShadow: "none" },
          },
        },
      },
    },
  },

  colors: {
    text: {
      main: "#1c1a17",
    },
    background: {
      main: "#f6f3ee",
      50: "#fdfcfa",
      100: "#f6f3ee",
      200: "#ece6da",
      300: "#ddd3bf",
      400: "#c7b896",
      500: "#a9812f",
      600: "#8a6a26",
      700: "#6a521e",
      800: "#4a3915",
      900: "#2a200c",
    },
    primary: {
      main: "#a9812f",
      50: "#f7f1e3",
      100: "#ecdfb9",
      200: "#dcc586",
      300: "#c8a952",
      400: "#a9812f",
      500: "#8a6a26",
      600: "#6a521e",
      700: "#4a3915",
      800: "#2a200c",
      900: "#141005",
    },
    secondary: {
      main: "#7c766a",
      50: "#f3f1ed",
      100: "#e2ddd3",
      200: "#c7bfae",
      300: "#a89f8c",
      400: "#7c766a",
      500: "#615c52",
      600: "#48453d",
      700: "#302e29",
      800: "#1c1a17",
      900: "#0e0d0b",
    },
    accent: {
      main: "#fffdf9",
      50: "#fffdf9",
      100: "#fdfaf3",
      200: "#f6f3ee",
      300: "#ece6da",
      400: "#ddd3bf",
      500: "#c7b896",
      600: "#a9812f",
      700: "#6a521e",
      800: "#2a200c",
      900: "#141005",
    },
  },
});
