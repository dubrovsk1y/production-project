import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { LangSwitcher, ThemeSwitcher } from "shared/ui";
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
      className={classNames(cls.Siderbar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        {t(collapsed ? "open" : "close", { ns: "actions" })}
      </button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
