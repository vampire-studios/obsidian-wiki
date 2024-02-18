import { ExtendedSidebarItem } from "./utils";

export default [
  {
    text: "obsidian.title",
    link: "/obsidian/",
    collapsed: false,
    items: [
      {
        text: "Obsidian GitHub",
        link: "https://github.com/vampire-studios/Obsidian"
      }
    ]
  },
  {
    text: "obsidian.basics",
    collapsed: true,
    items: [
      {
        text: "obsidian.basics.creating-an-addon",
        link: "/obsidian/basics/creating-an-addon",
      }
    ]
  },
  {
    text: "obsidian.creative_tabs",
    collapsed: true,
    items: [
      {
        text: "obsidian.creative_tabs.creating_a_creative_tab",
        link: "/obsidian/creative_tabs/creating_a_creative_tab",
      },
      {
        text: "obsidian.creative_tabs.creating_a_sub_group",
        link: "/obsidian/creative_tabs/creating_a_sub_group",
      }
    ]
  },
  {
    text: "obsidian.items",
    collapsed: true,
    items: [
      {
        text: "obsidian.items.creating-first-item",
        link: "/obsidian/items/creating-first-item",
      },
      {
        text: "obsidian.items.food",
        link: "/obsidian/items/food",
      },
      {
        text: "obsidian.items.armor-materials",
        link: "/obsidian/items/armor-materials",
      }
    ]
  },
  {
    text: "obsidian.commands",
    collapsed: true,
    items: [
      {
        text: "obsidian.commands.basics",
        link: "/obsidian/commands/basics"
      },
      {
        text: "obsidian.commands.arguments",
        link: "/obsidian/commands/arguments"
      }
    ]
  }
] as ExtendedSidebarItem[];