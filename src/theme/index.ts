import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      bg: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    bg: "#EDECE8",
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1200px)`,
  },
};

/* dark bg = #323022 */
/* accent: rgb(237 133 133)
rgb(138 133 237) */
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f8c948;
  }
`;
