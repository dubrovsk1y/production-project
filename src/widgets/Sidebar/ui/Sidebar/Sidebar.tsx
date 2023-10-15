import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { Button, ButtonVariant, LangSwitcher, ThemeSwitcher } from "shared/ui";
import { SideBarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => SideBarItemsList.map((item) => {
    const { path } = item;

    return <SidebarItem key={path} collapsed={collapsed} item={item} />;
  }), [collapsed]);

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
        {itemsList}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});
