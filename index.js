///FILL THIS IN
const BOT_TOKEN = 'OTU0ODA3NDM2NzQzNjgwMDMx.YjYfuA.-Jv6KAopuhTHQE2wrPuu_pHz8eA';
const PREFIX = '!';
//END OF FILLING
const Discord = require('discord.js');
require("dotenv").config()
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING","GUILD_WEBHOOKS"]});

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`);
});
client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(message + ' | ' + args + ' | ' + command);
    client.commands.get(command).execute(message,args);
})

client.login(process.env.BOT_TOKEN);