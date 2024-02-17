---
title: Sub-Groups in Content Packs
description: Learn how to register a simple item and how to texture, model and name it.
authors:
    - oliviathevampire
---

# {{ $frontmatter.title }}

Content packs in Obsidian can organize items into sub-groups for better categorization and organization. This page provides guidance on how to define and use sub-groups within your content packs.

## What are Sub-Groups?

Sub-groups allow content pack creators to categorize items into smaller, more specific collections. This is particularly useful for large content packs with a wide variety of items, where organizing items into sub-groups helps users navigate and understand the content more easily.

## Defining a Sub-Group

Sub-groups are defined in JSON files within the `sub_groups` directory of your content pack. Here's a simple structure for a sub-group file:

```json
{
    "name": {
        "id": "mymod:basic_tools"
    },
    "target_group": "mymod:tools",
    "items": [
        "mymod:hammer",
        "mymod:wrench",
        "mymod:screwdriver"
    ]
}
```