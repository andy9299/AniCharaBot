const api = require("../util/api");
const query = require("../queries/randomCharacter");
const Discord = require("discord.js");
const { shortenDescription } =  require("../util/shortenDescription");
const discordCommands = require("../handlers/discordCommands");

module.exports = {
    name: 'g',
    run: async ({client, message, args}) => {
        if (!(isNaN(args[0]))){
            var popularityLimit = args[0]
        }
        else {
            var popularityLimit = 7500
        }
        do {var response = await api(query, {popularity: Math.floor(Math.random() * (popularityLimit) + 1)});
            if (response.error) {
                return response
        }
        var data = response.Character
        } while(data.media.nodes[0].type != "ANIME" || data.image.large  === null)
        let name = data.name.first;
        if (data.name.last != null){
            name += ` ${data.name.last}`;
        }
        const newEmbed = new Discord.MessageEmbed()
            .setTitle("Guess the Character!")
            .setImage(data.image.large)
        message.channel.send({embeds: [newEmbed]});
        console.log("0");
        let filter = m => !m.author.bot;
        console.log("1");
        const answer = await message.channel.awaitMessages({
            filter: filter,
            time: 30000,
            max: 1
        });
        const ans = answer.first().content;
        if ( name.toLowerCase() === ans.toLowerCase() ){
            message.channel.send("Congrats!")
        }
        else {
            message.channel.send("Wrong!")
        }
    }
}