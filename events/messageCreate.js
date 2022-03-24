const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const {client, prefix, owners} = bot

        if (!message.guild) return 
        if (message.author.bot) return 
        if (!message.content.startsWith(prefix)) return 

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const commandStr = args.shift().toLowerCase()

        let discordCommand = client.discordCommands.get(commandStr)
        if(!discordCommand) return

        try {
            await discordCommand.run({...bot, message, args})
        }
        catch (err){
            console.error(err)
        }
    }
}