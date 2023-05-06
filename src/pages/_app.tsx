import "../../styles/globals.css";
import Main from "../components/Main/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";

const MyApp = () => {
  /* let testLintIsWorking = ""; */
  const nextVersion = "13";
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main version={nextVersion} />
    </ThemeProvider>
  );
};

export default MyApp;
