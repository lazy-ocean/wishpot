import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
