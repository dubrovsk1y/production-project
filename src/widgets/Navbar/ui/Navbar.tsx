import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(["navbar"]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.mainLink, {}, [])}
          to="/"
        >
          {t("mainPage", { ns: "navbar" })}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("aboutPage", { ns: "navbar" })}
        </AppLink>
      </div>
    </div>
  );
};
