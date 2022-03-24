const {getFiles} =  require("../util/functions")

module.exports = (bot) => {
    const {client} = bot

    let discordCommands = getFiles("./discordCommands/", ".js")
    discordCommands.forEach((file, i) => {
        const discordCommand = require(`../discordCommands/${file}`)
        client.discordCommands.set(discordCommand.name, discordCommand)
    })
    console.log(`${client.discordCommands.size} Discord commands loaded`)
}
