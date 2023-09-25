import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ThemeSwitch } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitch />
      <div className={classNames(cls.links, {}, [])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.mainLink, {}, [])}
          to="/"
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
