---
title: Command Argument Types | Obsidian Wiki
---

# Command Argument Types

Minecraft's commands are powerful tools that enhance gameplay, facilitate server management, and enable creative modding. This guide provides a detailed look into the various argument types essential for crafting custom Minecraft commands. Designed for both server administrators and modders, it offers insights into effectively utilizing these arguments, complete with examples and best practices.

::: warning
This documentation is based on Minecraft version 1.20.4. Command syntax and available arguments may differ in other versions. Always refer to the latest game updates for any changes in command structures.
:::

## Basic Arguments

Come basic argument types are:
- "integer"
- "float"
- "boolean"
- "double"

### "integer"

<div class="custom-block" style="color: var(--vp-custom-block-info-text); background-color: var(--vp-custom-block-info-bg); border: 3px solid var(--vp-custom-block-info-border); border-radius:5px; padding: 1rem;">
    <h4 id="examples-of-integer-argument-uses" tabindex="-1"> Examples of <code style="color: var(--vp-c-brand-1)">"integer"</code> argument uses </h4>
    <ul>
        <li><strong>Setting Time</strong>: Used in commands like <code>/time set 12000</code> where "12000" is an "integer" argument.</li>
        <li><strong>Allocating Points</strong>: In a custom command like <code>/points add player_name 30</code>, "30" is the integer argument representing points.</li>
    </ul>
</div>

### "float"

<div class="info custom-block" style="color: var(--vp-custom-block-info-text); background-color: var(--vp-custom-block-info-bg); border: 3px solid var(--vp-custom-block-info-border); border-radius:5px; padding: 1rem;">
    <h4 id="examples-of-float-argument-uses" tabindex="-1"> Examples of <code style="color: var(--vp-c-brand-1)">"float"</code> argument uses </h4>
    <ul>
        <li><strong>Adjusting Speed</strong>: In a command like <code>/speed 1.5</code> where "1.5" is a "float" argument.</li>
        <li><strong>Setting Growth Rate</strong>: In a custom farming plugin, setting growth rate like <code>/growthrate wheat 0.75</code></li>
    </ul>
</div>

### "boolean"

<div class="info custom-block" style="color: var(--vp-custom-block-info-text); background-color: var(--vp-custom-block-info-bg); border: 3px solid var(--vp-custom-block-info-border); border-radius:5px; padding: 1rem;">
    <h4 id="examples-of-boolean-argument-uses" tabindex="-1"> Examples of <code style="color: var(--vp-c-brand-1)">"boolean"</code> argument uses </h4>
    <ul>
        <li><strong>Toggle Settings</strong>: Commands like <code>/visibility true</code> or <code>/visibility false</code></li>
        <li><strong>Enabling/Disabling Features</strong>: In a custom mod, toggling features like <code>/feature customTrees true</code></li>
    </ul>
</div>

### "double"

::: info
#### Examples of ``"double"`` argument uses
- **Precise Measurement**: Setting a precise value in commands like `/setheight 2.234`.
- **Custom Economy Transactions**: In a custom economy plugin, specifying amounts like `/pay player_name 150.50`.
:::

## String Argumennts

These are all related to text in commands.

### "word"
The ``"word"`` argument is used to represent a single word. These words can only contain alphanumeric characters (A-Z, a-z and 0-9), and the underscore character.

Accepted ``"word"`` argument values:
```
Hello
123
hello123
Hello_world
```

Rejected ``"word"`` argument values:
```
hello@email.com
yesn't
```
- These are invalid cause they have other characters than (A-Z, a-z and 0-9) and underscore.

::: info
#### Examples of ``"word"`` argument uses
- **Setting Game Modes**: Used in commands like `/gamemode survival` where "survival" is a "word" argument.
- **Player Selection**: For commands targeting specific players, like `/kick PlayerName`.
- **Item Names**: In commands like `/give PlayerName diamond_sword`.
- **Editing Sign Text**: Commands like `/editsign here "Welcome to my shop!"`.
- **Player Communication**: In a messaging system, `/whisper player_name "Meet me at the village"`.
:::

### "string"
These can be single words, like the ``"word"`` argument, or have additional characters (e.g. spaces, symbols) **if surrounded by quotes**. To type quotation marks, you can use ``\"`` (as similar to Java) to escape these special characters.

Accepted ``"string"`` argument values:
```
hello
"hello world!"
"hello@gmail.com"
"this has \" <<-- speech marks! "
```

Rejected ``"string"`` values:
```
hello world
私
"speech marks: ""
```
- These are invalid cause they either don't have quotation marks or have extra ones incorrectly, or special characters that is not english ones or normal characters.

::: info
#### Examples of ``"string"`` argument uses
- **Editing Sign Texts**: For commands that edit multiple lines of text on signs.
- **Broadcast Messages**: Commands like `/broadcast "Welcome to the server!"` where the message includes spaces.
- **Complex Item Naming**: In commands like `/give PlayerName name:"Enchanted Sword of Power"`.
:::

### "greedy"
The ``"greedy"`` argument takes the string arguments a step further. Any characters and symbols are allowed and quotation marks are not required.

::: info
### Example - Messaging Command
#description
Say we have a simple message command of the following form:
<br>
<br>
```/message <target> <message>```
<br>
<br>
This would be ideal for a greedy string, since it can consume all text after the player's name:
```json
{
    "op_level": 0,
    "arguments": {
        "target" : {
            "type": "player",
            "arguments": {
                "message": {
                    "type": "greedy",
                    "executes": [
                        "msg {target} {message}"
                    ]
                }
            }
        }
    }
}
```
Any text entered after the ``<target>`` argument would be sent to the player. For example, the command could be used as follows:
```
/message Skepter This is some incredibly long string with "symbols" and $p3c!aL characters~
```

::: info
#### Examples of ``"greedy"`` argument uses
- **Long Messages or Announcements**: For sending long messages in chat, like `/announce The server will be under maintenance tomorrow from 8 PM.`.
- **Book Writing**: In commands that input large amounts of text for books.
- **Custom Commands with Multiple Arguments**: Like a custom command `/setrule No Griefing; Respect Others`.
- **Messaging/Whisper Command**: As shown earlier, `/message player_name This is a message`.
- **Book Writing**: In a custom command to write book contents, `/writebook Once upon a time...`.
- A messaging/whisper command (as shown in the example above)
- A mailing command
- Any command involving lots of text, such as a command to write the contents of a book
- Any command which involves an unreasonable/unknown amount of arguments
- Any command where you want to parse arguments similar to how regular Bukkit would
:::

### "player"

This argument type is used to specify a player in the game. It is typically used in commands that target specific players.
- **Usage**: `/teleport player_name`, `/give player_name minecraft:diamond_sword`.
- **Function**: Identifies a specific player based on their username.

::: info
#### Examples of ``"player"`` argument uses
- **Targeting Players**: Commands like `/kick player_name` or `/teleport player_name`.
- **Custom Player Interactions**: In custom events, such as `/invite player_name to party`.
:::

### "entity"

The ``"entity"`` argument type is designed for commands that target or manipulate entities within the game, such as mobs, vehicles, or items.
- **Usage**: `/summon entity_type`, `/effect give entity_type minecraft:speed`.
- **Function**: Identifies an entity or a type of entity.

::: info
#### Examples of ``"entity"`` argument uses
- **Entity Manipulation**: Commands like `/spawn entity_type location`.
- **Custom Mob Interactions**: In a mob management system, like `/tame nearest wolf`.
:::

### "item"

Used for specifying an item within the game. This argument type is crucial for commands involving item manipulation or creation.
- **Usage**: `/give player_name item_name`, `/clear player_name item_name`.
- **Function**: Identifies a specific item or category of items.

::: info
#### Examples of ``"item"`` argument uses
- **Item Spawning**: Commands like `/give player_name minecraft:diamond_sword`.
- **Custom Crafting Recipes**: In a custom crafting plugin, `/addrecipe minecraft:stick + minecraft:coal => minecraft:torch`.
:::

### "location"

This argument type is used to specify a location in the world, often in terms of x, y, and z coordinates.
- **Usage**: `/tp x y z`, `/setblock x y z block_name`.
- **Function**: Identifies a specific point or area in the game world.

::: info
#### Examples of ``"location"`` argument uses
- **Teleporting to Coordinates**: Commands like `/tp 100 64 -200`.
- **Setting Event Locations**: In a custom event system, `/seteventlocation 150 70 -150`.
:::

### "rotation"

The ``"rotation"`` argument type is used in commands that require specifying the orientation or rotation of entities or the player.
- **Usage**: `/teleport player_name x y z yaw pitch`, `/setrotation entity_name yaw pitch`.
- **Function**: Specifies the yaw and pitch for rotation.

::: info
#### Examples of ``"rotation"`` argument uses
- **Setting Entity Orientation**: Commands like `/setrotation entity_name 90 45`.
- **Custom Camera Controls**: In a cinematic tool, `/camera rotate 0 180`.
:::

## Common Errors and Troubleshooting

### Syntax Errors
- **Issue**: Incorrect command format or typos.
- **Solution**: Verify the command syntax and argument order. Double-check for typographical errors.

### Incorrect Argument Types
- **Issue**: Using an inappropriate argument type for a command.
- **Solution**: Understand the purpose of each argument type and apply them correctly. Refer to the examples provided in this guide.

### Performance Issues
- **Issue**: Commands that target many entities or large areas can slow down the server.
- **Solution**: Use such commands sparingly, especially on multiplayer servers. Optimize command arguments to target specific entities or locations.

## Additional Resources

- [Minecraft Wiki - Commands](https://minecraft.fandom.com/wiki/Commands)

## Community Corner

- **Share Your Creations**: Have you crafted an innovative command or custom script? Share it with the Minecraft community for feedback and inspiration.
- **Ask Questions**: If you're unsure about a specific command argument or its application, feel free to ask. The community is here to help.
- **Discuss and Collaborate**: Exchange ideas and collaborate on complex command projects. Together, we can push the boundaries of what's possible in Minecraft.

## Glossary

- **Command Block**: A block in Minecraft that allows the execution of commands.
- **Selector**: A special argument in Minecraft commands used to select entities, players, or items.
- **Function File**: A file in Minecraft used to run multiple commands in sequence.
- **Syntax**: The arrangement of words and phrases to create well-formed commands in Minecraft.