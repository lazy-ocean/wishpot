import { ThemeType } from "../../utils/hooks/useTheme";
import { Switcher } from "./ThemeSwitcher.styled";

export const ThemeSwitcher = ({
  theme,
  setTheme,
}: {
  theme: ThemeType;
  setTheme: (arg0: ThemeType) => void;
}) => {
  return (
    <Switcher
      toggled={theme === ThemeType.light}
      toggle={() =>
        setTheme(theme === ThemeType.light ? ThemeType.dark : ThemeType.light)
      }
    />
  );
};
