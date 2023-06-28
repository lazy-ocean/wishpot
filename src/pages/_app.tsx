import { useEffect, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme, LightTheme, DarkTheme } from "../theme";
import { AppProps } from "next/app";
import "../../styles/globals.css";
import localFont from "next/font/local";
import useTheme, { ThemeType } from "../utils/hooks/useTheme";

const myFont = localFont({ src: "../../public/fonts/Recoleta-SemiBold.woff2" });

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme();

  return (
    <UserProvider>
      <ThemeProvider theme={theme === ThemeType.dark ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <style jsx global>{`
          :root {
            --h-font: ${myFont.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </UserProvider>
  );
}
