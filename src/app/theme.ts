import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#fcffe5",
      },
      p: {
        color: "#423f55",
      },
    },
  },

  colors: {
    text: {
      main: "#423f55",
    },
    background: {
      main: "#fcffe5",
      50: "#fcffe5",
      100: "#f9ffcc",
      200: "#f5ff99",
      300: "#f0ff66",
      400: "#ebff33",
      500: "#e6ff00",
      600: "#b8cc00",
      700: "#8a9900",
      800: "#5c6600",
      900: "#2e3300",
    },
    primary: {
      main: "#BACD92",
      50: "#f4f7ee",
      100: "#e9efdc",
      200: "#d3dfb9",
      300: "#bdcf96",
      400: "#a7bf73",
      500: "#91af50",
      600: "#748c40",
      700: "#576930",
      800: "#3a4620",
      900: "#1d2310",
    },
    secondary: {
      main: "#f5d9d1",
      50: "#faeeea",
      100: "#f6dcd5",
      200: "#edbaab",
      300: "#e39782",
      400: "#da7458",
      500: "#d1512e",
      600: "#a74125",
      700: "#7d311c",
      800: "#542112",
      900: "#2a1009",
    },
    accent: {
      main: "#71987a",
      50: "#f0f4f1",
      100: "#e1eae3",
      200: "#c4d4c8",
      300: "#a6bfac",
      400: "#89a990",
      500: "#6b9475",
      600: "#56765d",
      700: "#405946",
      800: "#2b3b2f",
      900: "#151e17",
    },
  },
});
