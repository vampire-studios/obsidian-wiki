# Commands

Commands ... something something something...

Commands go in the `commands` directory in the content pack part of the addon.

E.g.
```
content/examplepack/commands/cookies.json
```

This guide details how to create a custom command for Obsidian, allowing you to add unique functionalities to your content pack.

## Table of Contents
- [Command Structure](#command-structure)
- [Explanation of the Command Format](#explanation-of-the-command-format)
- [Command Usage](#command-usage)
- [Adding Your Command](#adding-your-command)

## Command Structure

Here's an example JSON structure for a simple command that gives cookies:

```json
{
    "permission_level": 2,
    "arguments": {
        "amount" : {
            "type": "integer",
            "execute": [
                "give @s cookie"
            ]
        },
        "user": {
            "type": "player",
            "execute": [
                "give {user} cookie"
            ],
            "arguments": {
                "amount": {
                    "type": "integer",
                    "execute": [
                        "give {user} cookie {amount}"
                    ]
                }
            }
        }
    }
}
```

## Explanation of the Command Format
``permission_level``: The required permission level to use this command.
``arguments``: The parameters the command accepts.
``amount``: An integer argument for specifying the number of cookies.
``user``: A player argument to specify the recipient of the cookies.
``Nested amount argument``: Used in conjunction with ``'user'`` to specify the number of cookies for that player.

## "permission_level"

Op levels are a number between 0 and 4, you can look [here](https://minecraft.fandom.com/wiki/Permission_level#Effect) for more info.

## "arguments"

Arguments is an array of all the arguments you want the command to have, can be in child objects also.

### "type"

This defines the type of argument that the entry will be.

If you want to see all the possible values you can go to [Command Argument Types](/guide/command-argument-types)

### "executes"

Executes is an array of commands you can run.
You can use the names of the existing arguments in ``{}`` in the commands and it will use that value. 

**_Example:_** ``"tp {user} {target}"``

This will use the user and target arguments in the tp command as it's arguments.