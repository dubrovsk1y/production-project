import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonVariant } from "shared/ui";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariant.TEXT}
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
