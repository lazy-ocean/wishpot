import { useEffect, useState } from "react";

export enum ThemeType {
  dark = "dark",
  light = "light",
}

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  /*   useEffect(() => {
    console.log(theme);
  }, [theme]); */

  /*   useEffect(() => {
    if (window !== undefined) {
      const darkMode = window?.matchMedia("(prefers-color-scheme: dark)");
      darkMode.onchange = (e) => {
        const darkModeOn = e.matches;
        darkModeOn ? setTheme(ThemeType.dark) : setTheme(ThemeType.light);
      };
    }
  }, []); */

  useEffect(() => {
    if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(ThemeType.dark);
    } else {
      if (localStorage.getItem("theme")) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme !== theme) {
          setTheme(savedTheme as ThemeType);
          console.log(savedTheme);
        }
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
