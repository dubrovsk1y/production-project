import { AppLink } from "shared/ui";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItem as SidebarItemType } from "../../model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation(["sidebar"]);

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text, { ns: "sidebar" })}
      </span>
    </AppLink>
  );
});
