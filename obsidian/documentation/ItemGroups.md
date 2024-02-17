---
title: Creative Tabs
authors:
    - oliviathevampire
---

# {{ $frontmatter.title }}

In Creative Mode, tabs organize items and resources for easy access. This document guides you on adding new tabs to the creative mode menu in Minecraft.
Creative Mode tab definitions allow adding new tabs to the creative mode menu.

For integration with item definitions, see ["group"](/obsidian/guide/items.html#group) (for defining item categories) and ["creative_menu_stacks"](/obsidian/guide/items.html#creative-menu-stacks) (for adding items to creative menu stacks).

Named item groups should be placed in the `item_groups` directory within the content pack of the addon.

E.g.
```
content/examplepack/item_groups/bedrock_blocks.json
```

This example shows how to define a new group of items, specifically 'Bedrock Blocks', within a content pack.

## Basic structure of the JSON file

The JSON file for defining a Creative Mode tab consists of the following structure:

```json
{
  "name": {
    "translations": {
      "en_us": "Bedrock Blocks"
    }
  },
  "icon": "minecraft:bedrock",
}
```

## "name -> translations"

This section maps language IDs to the desired name for the tab in each language. It ensures the tab name is correctly displayed across different language settings.

## "icon"

The icon field specifies the item to be used as the tab's icon. This field is required.

Format: Must be a valid resource location string, such as "minecraft:bedrock".
Namespacing: If the namespace (preceding the colon) is omitted, it defaults to "minecraft".