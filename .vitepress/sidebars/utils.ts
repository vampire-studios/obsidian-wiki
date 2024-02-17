import { DefaultTheme } from "vitepress";

export interface ExtendedSidebarItem extends DefaultTheme.SidebarItem {
  process?: boolean;
  items?: ExtendedSidebarItem[];
}