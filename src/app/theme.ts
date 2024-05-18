import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  Link: {
    baseStyle: {
      // normal styling
      textDecoration: "none",
      // hover styling goes here
      _hover: {
        textDecoration: "none",
      },
    },
  },

  styles: {
    global: {
      "html, body": {
        background: "#EAF4F4",
      },
      p: {
        color: "#34252f",
      },
      h1: {
        color: "#34252f",
      },
    },
  },

  fonts: {
    heading: `'Khan', sans-serif`,
    body: `'Hind', sans-serif`,
  },

  colors: {
    text: {
      main: "#33242e",
    },
    background: {
      main: "#ebf4f4",
      50: "#eff6f6",
      100: "#deeded",
      200: "#bddbdb",
      300: "#9cc9c9",
      400: "#7bb7b7",
      500: "#5ba4a4",
      600: "#488484",
      700: "#366363",
      800: "#244242",
      900: "#122121",
    },
    primary: {
      main: "#a2c3b1",
      50: "#eff5f2",
      100: "#e0ebe5",
      200: "#c1d7cb",
      300: "#a2c3b1",
      400: "#83af97",
      500: "#639c7d",
      600: "#507c64",
      700: "#3c5d4b",
      800: "#283e32",
      900: "#141f19",
    },
    secondary: {
      main: "#6a9080",
      50: "#f0f4f3",
      100: "#e2e9e6",
      200: "#c4d4cd",
      300: "#a7beb4",
      400: "#8aa89c",
      500: "#6c9383",
      600: "#577569",
      700: "#41584e",
      800: "#2b3b34",
      900: "#161d1a",
    },
    accent: {
      main: "#f5fff7",
      50: "#e5ffeb",
      100: "#ccffd6",
      200: "#99ffad",
      300: "#66ff85",
      400: "#33ff5c",
      500: "#00ff33",
      600: "#00cc29",
      700: "#00991f",
      800: "#006614",
      900: "#00330a",
    },
  },
});
