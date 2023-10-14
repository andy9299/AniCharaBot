<h1 align="center">AniCharaBot</h3>
<h3 align="center">A simple bot for Discord about anime characters</h5>

# Usage

A Discord Bot for character-related things using the AniList api.

- Search information about a character
- Guess a character based on a picture
- Get information about a random character

# Built with

- discord.js
- graphql-request
- AniList API

# Setup

#### Installation

1. Navigate to package.json and run

```
yarn
```

#### Setting up the Bot

2. Create a .env file in the same directory
3. Assign a prefix to the bot (Suggested "c.")

```
PREFIX=c.
```

#### Getting a Discord Bot Token

4. Navigate to [Discord's Developer Portal](https://discord.com/developers/applications) and follow any necessary instructions
5. Create a new Application
6. Navigate to the Bot tab of the newly created application
7. Create a bot and copy the bot token
8. Assign the token to the bot in the .env file

```
PREFIX=c.
BOT_TOKEN={YOUR_TOKEN_HERE}
```

#### Adding the Bot to a Server

9. Navigate to [Discord's Developer Portal](https://discord.com/developers/applications)
10. Select the bot and navigate to the OAuth2 tab then URL Generator
11. Select approriate permissions.
    - Suggested (Change to suit needs):
      - SCOPES
        - bot
        - applications.commands
      - BOT PERMISSIONS
        - Administrator
12. Navigate to the generated link and invite the bot to a server

#### Starting the Bot

12. Navigate to the bot directory and run:

```
yarn start
```
