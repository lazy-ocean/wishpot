import "../../styles/globals.css";
import Main from "../components/Main/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const MyApp = () => {
  /* let testLintIsWorking = ""; */
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </UserProvider>
  );
};

export default MyApp;
