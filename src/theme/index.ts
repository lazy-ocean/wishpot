import { createGlobalStyle, DefaultTheme } from "styled-components";

interface Palette {
  bg: string;
  blobsTint: string;
  pink: string;
  bgCard: string;
  font: string;
}

interface Spacings {
  xxs: string;
  xs: string;
  s: string;
  m: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;
    spacings: Spacings;
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    bg: "rgb(248, 201, 72)",
    blobsTint: "rgb(238, 205, 163)",
    pink: "rgb(211,133,237)",
    bgCard: "rgb(240, 227, 216)",
    font: "rgb(0, 0, 0)",
  },
  spacings: { xxs: "0.5rem", xs: "1rem", s: "2rem", m: "4rem" },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1200px)`,
  },
};

export const LightTheme: DefaultTheme = {
  ...theme,
  palette: {
    bg: "rgb(248, 201, 72)",
    blobsTint: "rgb(238, 205, 163)",
    pink: "rgb(211,133,237)",
    bgCard: "rgb(240, 227, 216)",
    font: "rgb(0, 0, 0)",
  },
};

export const DarkTheme: DefaultTheme = {
  ...theme,
  palette: {
    bg: "rgb(30, 29, 24)",
    blobsTint: "rgb(50, 48, 34)",
    pink: "rgb(200, 118, 227)",
    bgCard: "rgb(70, 46, 74)",
    font: "rgb(212, 212, 212)",
  },
};
/* background-color: rgb(248, 201, 72); */
/*  background-color: rgb(30, 29, 24); */

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.font};
  }
`;
