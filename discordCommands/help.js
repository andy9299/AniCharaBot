module.exports = {
    name: 'help',
    run: async ({client, message, args}) => {
        message.reply("c.info [character name] - returns some information about a character\n" + 
        "c.r [optional: number for popularity] - returns a random anime character within the top range of popularity (default top 15,000)")
    }
}