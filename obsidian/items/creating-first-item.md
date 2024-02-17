---
title: Creating Your First Item
description: Learn how to register a simple item and how to texture, model and name it.
authors:
    - oliviathevampire
---

# {{ $frontmatter.title }}

This section of the documentation provides detailed information on defining items and condensed entry groups within your content pack for [Your Mod Name].

## Table of Contents
- [Item File Structure](#item-file-structure)
- [Understanding the Item File](#understanding-the-item-file)
    - [Information Section](#information-section)
    - [Rendering Section](#rendering-section)
- [Creating Textures](#creating-textures)
- [Modeling Your Item](#modeling-your-item)
- [Naming and Translations](#naming-and-translations)

## Item File Structure

Each item in your content pack is defined in a JSON file. Below is an example structure of an item file:

```json
{
    "information": {
        "name": {
            "id": "mymod:blue_gem",
            "translations": {
                "en_us": "Blue Gem"
            }
        },
        "item_properties": {
            "item_group": "mymod:precious_items"
        }
    },
    "rendering": {
        "itemModel": {
            "parent": "item/generated",
            "textures": {
                "layer0": "mymod:item/blue_gem"
            }
        }
    }
}
```

## Understanding the Item File
The item file is structured in JSON format and is divided into two main sections: information and rendering.

### Information Section
``name``: This subsection includes the item's unique identifier and translations for its name.
- ``id``: A unique identifier for the item, typically prefixed with your mod's namespace (e.g., mymod:blue_gem).
- ``translations``: Localized names for the item. The key (e.g., en_us) represents the language code, and the value is the name of the item in that language.

``item_properties``: Defines various properties of the item.
- ``item_group``: Specifies the item group (or category) the item belongs to. This helps in organizing similar items together (e.g., mymod:precious_items).


### Rendering Section

``itemModel``: Determines how the item will be rendered in the game.
- ``parent``: The parent model that this item's model inherits properties from. Using item/generated is a common practice for standard items.
- ``textures``: Defines the texture layers of the item.
    - ``layer0``: The path to the primary texture of the item. This is typically stored in your mod's assets folder (e.g., mymod:item/blue_gem).

This structure allows you to define the essential aspects of your item, including how it's identified, categorized, and visually represented in the game. Once you've created this file and added it to your content pack, the item will be registered and available in [Your Mod Name].

## Creating Textures
``Texture Files``: Create a texture for your item. This will be a .png file that visually represents your item. For the Blue Gem, the texture file might be a blue-colored gem.

``Resolution``: Ensure your texture adheres to Minecraft's standards, commonly 16x16 pixels for items.

``Saving Your Texture``: Save your texture in the textures/item folder within your content pack. For the Blue Gem, the path would be mymod:item/blue_gem.

## Modeling Your Item (Optional)
``Item Model``: Define the model of your item. Most items can use Minecraft's standard item/generated model, which is a flat, 2D representation.

``Custom Models``: If you need a custom 3D model, use a modeling tool compatible with Minecraft and reference your model in the itemModel section.

## Naming and Translations
``Item ID``: Give your item a unique ID, like mymod:blue_gem, to distinguish it from other items.

``Localization``: Use the translations section to provide localized names for your item. For instance, "en_us": "Blue Gem" provides the English name.