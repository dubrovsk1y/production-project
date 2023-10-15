import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";

export interface SidebarItem {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemsList: SidebarItem[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "mainPage",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "aboutPage",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "profilePage",
  },
];
