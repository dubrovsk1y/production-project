import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { AppLink, Button, ButtonVariant, LangSwitcher, ThemeSwitcher } from "shared/ui";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation(["sidebar"]);
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Siderbar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.btnCollapse}
        data-testid="sidebar-toggle"
        variant={ButtonVariant.OUTLINED}
        onClick={onToggle}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t("mainPage", { ns: "sidebar" })}
          </span>
        </AppLink>

        <AppLink
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t("aboutPage", { ns: "sidebar" })}
          </span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
