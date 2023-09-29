import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { Button, ButtonVariant, LangSwitcher, ThemeSwitcher } from "shared/ui";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation(["actions"]);
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
      <Button data-testid="sidebar-toggle" variant={ButtonVariant.OUTLINED} onClick={onToggle}>
        {t(collapsed ? "open" : "close", { ns: "actions" })}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
