import { extendTheme } from "@chakra-ui/react";

import { Hind, Khand } from "next/font/google";

const headingFont = Khand({
  subsets: ["latin"],
  weight: "700",
});
const bodyFont = Hind({
  subsets: ["latin"],
  weight: "400",
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
        backgroundColor: "#edf4f0",
        backgroundImage:
          "radial-gradient(circle, rgba(94, 138, 121, 0.22) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      },
      p: {
        color: "#2a1e28",
      },
      h1: {
        color: "#2a1e28",
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
        letterSpacing: "0.04em",
        fontWeight: "700",
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
      main: "#2a1e28",
    },
    background: {
      main: "#edf4f0",
      50: "#f4f9f6",
      100: "#e2ede8",
      200: "#c5dbd1",
      300: "#a8c9ba",
      400: "#8bb7a3",
      500: "#6ea58c",
      600: "#588470",
      700: "#426354",
      800: "#2c4238",
      900: "#16211c",
    },
    primary: {
      main: "#96bba7",
      50: "#f0f6f3",
      100: "#d9ece4",
      200: "#b3d9c9",
      300: "#96bba7",
      400: "#72a288",
      500: "#538b6c",
      600: "#426f56",
      700: "#325341",
      800: "#21382b",
      900: "#111c16",
    },
    secondary: {
      main: "#5e8a79",
      50: "#eef4f2",
      100: "#d4e6e0",
      200: "#a9cdc1",
      300: "#7eb4a2",
      400: "#5e8a79",
      500: "#4a6e60",
      600: "#3a5749",
      700: "#2b4136",
      800: "#1c2b24",
      900: "#0e1612",
    },
    accent: {
      main: "#f7fdf9",
      50: "#edfaf2",
      100: "#d4f2e3",
      200: "#a9e5c7",
      300: "#7dd8ab",
      400: "#52cb8f",
      500: "#27be73",
      600: "#1f985c",
      700: "#177245",
      800: "#0f4c2e",
      900: "#082617",
    },
  },
});
