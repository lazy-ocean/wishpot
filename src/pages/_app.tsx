import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { AppProps } from "next/app";
import "../../styles/globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../public/fonts/Recoleta-SemiBold.woff2" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <style jsx global>{`
          :root {
            --h-font: ${myFont.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
