const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

let bot = {
    client,
    prefix: process.env.PREFIX
};

client.discordCommands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot) => require("./handlers/events")(bot);
client.loadDiscordCommands = (bot) => require("./handlers/discordCommands")(bot);
client.loadEvents(bot);
client.loadDiscordCommands(bot);
client.cooldowns = {};

module.exports = bot;

client.login(process.env.BOT_TOKEN);