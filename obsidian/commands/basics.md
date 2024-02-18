# Commands

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
``permission_level``: The required permission level to use this command. Is a number between 0 and 4, you can look [here](https://minecraft.fandom.com/wiki/Permission_level#Effect) for more info.

``arguments``: Arguments is an array of all the arguments you want the command to have, can be in child objects also.

``type``: This defines the type of argument that the entry will be. If you want to see all the possible values you can go to [Command Argument Types](/guide/command-argument-types)

``executes``: Executes is an array of commands you can run.
You can use the names of the existing arguments in ``{}`` in the commands and it will use that value. 

**_Example:_** ``"tp {user} {target}"``

This will use the user and target arguments in the tp command as it's arguments.

## Command Usage
This command can be used in the following ways:

``/cookies <amount>``: Gives a specified number of cookies to the command issuer.

``/cookies <user>``: Gives 1 cookie to the specified player.

``/cookies <user> <amount>``: Gives a specified number of cookies to the specified player.

## Adding Your Command
To add this command to your content pack:
- Create a JSON file with the above structure.
- Place the file in the commands directory of your content pack.
- Ensure the command follows the conventions and requirements of Obsidian.