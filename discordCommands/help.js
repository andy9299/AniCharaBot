module.exports = {
    name: 'help',
    run: async ({ client, message, args }) => {
        message.reply("info [character name] - returns some information about a character\n" +
            "r [optional: number for popularity] - returns a random anime character within the top range of popularity (default: top 15,000)\n" +
            "g [optional: number for popularity] - returns an image of a random anime character where the user can guess who it is once (default: top 7,500)");
    }
};