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
        text: "obsidian.basics.creating_an_addon",
        link: "/obsidian/basics/creating_an_addon",
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
    text: "obsidian.guide",
    collapsed: true,
    items: [
      {
        text: "obsidian.guide.armor_materials",
        link: "/obsidian/guide/armor_materials",
      },
      {
        text: "obsidian.guide.attribute_modifiers",
        link: "/obsidian/guide/attribute_modifiers",
      },
      {
        text: "obsidian.guide.blocks",
        link: "/obsidian/guide/blocks",
      },
      {
        text: "obsidian.guide.command_argument_types",
        link: "/obsidian/guide/command_argument_types",
      },
      {
        text: "obsidian.guide.commands",
        link: "/obsidian/guide/commands",
      },
      {
        text: "obsidian.guide.effect_instances",
        link: "/obsidian/guide/effect_instances",
      },
      {
        text: "obsidian.guide.food",
        link: "/obsidian/guide/food",
      },
      {
        text: "obsidian.guide.ingredient",
        link: "/obsidian/guide/ingredient",
      },
      {
        text: "obsidian.guide.items",
        link: "/obsidian/guide/items",
      }
    ]
  },
  {
    text: "obsidian.items",
    collapsed: true,
    items: [
      {
        text: "obsidian.items.creating_first_item",
        link: "/obsidian/items/creating-first-item",
      }
    ]
  },
  {
    text: "obsidian.entities",
    collapsed: true,
    items: [
      {
        text: "obsidian.entities.effects",
        link: "/obsidian/entities/effects"
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
      },
      {
        text: "obsidian.commands.suggestions",
        link: "/obsidian/commands/suggestions"
      }
    ]
  },
  {
    text: "obsidian.misc",
    collapsed: true,
    items: [
      {
        text: "obsidian.misc.codecs",
        link: "/obsidian/codecs"
      },
      {
        text: "obsidian.misc.events",
        link: "/obsidian/events"
      }
    ]
  },
  {
    text: "obsidian.documentation",
    collapsed: true,
    items: [
      {
        text: "obsidian.documentation.block_materials",
        link: "/obsidian/documentation/BlockMaterials"
      },
      {
        text: "obsidian.documentation.block_set_types",
        link: "/obsidian/documentation/BlockSetTypes"
      },
      {
        text: "obsidian.documentation.block_types",
        link: "/obsidian/documentation/BlockTypes"
      },
      {
        text: "obsidian.documentation.enchantments",
        link: "/obsidian/documentation/Enchantments"
      },
      {
        text: "obsidian.documentation.item_groups",
        link: "/obsidian/documentation/ItemGroups"
      },
      {
        text: "obsidian.documentation.item_types",
        link: "/obsidian/documentation/ItemTypes"
      },
      {
        text: "obsidian.documentation.sound_events",
        link: "/obsidian/documentation/SoundEvents"
      },
      {
        text: "obsidian.documentation.sound_types",
        link: "/obsidian/documentation/SoundTypes"
      }
    ]
  }
] as ExtendedSidebarItem[];