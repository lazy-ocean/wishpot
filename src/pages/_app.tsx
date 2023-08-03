import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, LightTheme, DarkTheme } from "../theme";
import { AppProps } from "next/app";
import "../../styles/globals.css";
import localFont from "next/font/local";
import useTheme, { ThemeType } from "../utils/hooks/useTheme";
import { Header } from "../components/Header/Header";
import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";
import { Blobs } from "../components/Blobs/Blobs";
import "@theme-toggles/react/css/Classic.css";

const myFont = localFont({ src: "../../public/fonts/Recoleta-SemiBold.woff2" });
const typographyFont = localFont({
  src: "../../public/fonts/Manrope-Regular.woff2",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme();

  return (
    <UserProvider>
      <ThemeProvider theme={theme === ThemeType.dark ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <style jsx global>{`
          :root {
            --h-font: ${myFont.style.fontFamily};
            --r-font: ${typographyFont.style.fontFamily};
          }
        `}</style>
        <main style={{ position: "relative", height: "100vh" }}>
          <Header>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </Header>
          <Blobs theme={theme} />
          <Component {...pageProps} theme={theme} setTheme={setTheme} />
        </main>
      </ThemeProvider>
    </UserProvider>
  );
}
