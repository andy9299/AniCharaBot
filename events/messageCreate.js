const Discord = require("discord.js");

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owners } = bot;

        if (!message.guild) return;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandStr = args.shift().toLowerCase();

        let discordCommand = client.discordCommands.get(commandStr);
        if (!discordCommand) return;
        if (discordCommand.cooldown) {
            let cooldownUntil = client.cooldowns[`${discordCommand.name}-${message.channelId}`];
            if (cooldownUntil && cooldownUntil > Date.now()) return message.reply(`Please wait for current game to finish!`);
        }
        client.cooldowns[`${discordCommand.name}-${message.channelId}`] = new Date().valueOf() + discordCommand.cooldown;

        try {
            await discordCommand.run({ ...bot, message, args });
        }
        catch (err) {
            console.error(err);
        }
    }
};