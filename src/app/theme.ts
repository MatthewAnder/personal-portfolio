import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#282c34",
      },
      p: {
        color: "#e4bb68",
      },
      h1: {
        color: "#e4bb68",
      },
    },
  },

  fonts: {
    heading: `'Jetbrains Mono'`,
    body: `'Jetbrains Mono'`,
  },

  colors: {
    text: {
      main: "#e4bb68",
    },
    background: {
      main: "#282c34",
      50: "#f1f2f4",
      100: "#e2e4e9",
      200: "#c5cad3",
      300: "#a9afbc",
      400: "#8c95a6",
      500: "#6f7a90",
      600: "#596273",
      700: "#434956",
      800: "#2c313a",
      900: "#16181d",
    },
    primary: {
      main: "#fa8231",
      50: "#fef0e6",
      100: "#fa8231",
      200: "#e06c75",
      300: "#61afef",
      400: "white",
      500: "#c678dd",
      600: "#a9b0bd",
    },
    secondary: {
      main: "#f3a683",
      50: "#fdeee8",
      100: "#faded1",
      200: "#f6bda2",
      300: "#f19b74",
      400: "#ed7a45",
      500: "#e85917",
      600: "#ba4712",
      700: "#8b350e",
      800: "#5d2409",
      900: "#2e1205",
    },
    accent: {
      main: "#c678dd",
      50: "#f6ebfa",
      100: "#eed6f5",
      200: "#dcadeb",
      300: "#cb85e0",
      400: "#ba5cd6",
      500: "#a833cc",
      600: "#8729a3",
      700: "#651f7a",
      800: "#431452",
      900: "#220a29",
    },
  },
});
