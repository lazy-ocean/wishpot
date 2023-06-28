import { ThemeType } from "../../utils/hooks/useTheme";

export const ThemeSwitcher = ({
  theme,
  setTheme,
}: {
  theme: ThemeType;
  setTheme: (arg0: ThemeType) => void;
}) => {
  return (
    <button
      onClick={() =>
        setTheme(theme === ThemeType.light ? ThemeType.dark : ThemeType.light)
      }
    >
      {ThemeType.light ? ThemeType.light : ThemeType.dark}
    </button>
  );
};
