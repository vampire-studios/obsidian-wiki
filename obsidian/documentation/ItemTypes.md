---
title: Item Types
authors:
    - oliviathevampire
---

# {{ $frontmatter.title }}

In Minecraft, items come in various types, each with unique properties and behaviors. Understanding these item types is crucial for effective game development and item customization. Some common items may require special handling, such as using specific superclasses in the code.

This document outlines the available item types and their parameters. Keep in mind that more types may be added in future updates.

## "plain"

The default item type with no special parameters.

## "block"

Represents and places a block. Typically used via the block JSON's "item" key but can be defined separately.

Parameters:

"places": The registry name of the block to be placed. Optional, defaults to a block with the same name as the item.

Parameters:
* `"places"`: The block registry name for the block that will be placed by this item.
  * Optional. Default: a block with the same name as the item.

## "food_bowl"

Makes the item behave as a food bowl and return an empty bowl when eating.

## "drinkable_bottle"

Similar to "food_bowl", this item allows defining foods that come in bottles and other containers.

Parameters:
* `"base_item"`: The item that will be returned when eating.
  * Optional. Default: an empty glass bottle.

## "bucket"

Makes the item into a bucket, with some contained fluid.

Parameters:
* `"fluid"`: The registry name of the fluid.
  * Required.

## "armor" 

Armor items are equippable in the armor slots of the player and other entities. Armor items need special textures based on the armor material.

Parameters:
* `"equipment_slot"`: A string representing an equipment slot. One of: `"head"`, `"chest"`, `"legs"`, or `"feet"`.
  * Required.
* `"material"`: The name of an armor material.

## "sword", "shovel", "axe", "pickaxe", "hoe"

Tool items are good for digging things, and some also have advantages when used to attack.

They all share a common set of parameters:
* `"tier"`: The name of an item tier.
* `"damage"`: A number added on top of the tier's base damage, used to adjust it. Can be negative.
* `"speed"`: A number added on top of the tier's base speed, used to adjust it. Can be negative.

## "digger"

Used to define a custom tool type.

This item type has the same parameters as the tools above, and one additional:
* `"mineable"`: A resource location of a block tag containing the list of blocks this tool is able to mine faster than an empty hand. If the block has the "requires_tool_for_drops" flag set, an empty hand or a tool that doesn't have the block in its tag would not be able to get loot.

## "tiered"

Used for items that have tiers, but are not diggers or weapons.

Parameters:
* `"tier"`: The name of an item tier.
