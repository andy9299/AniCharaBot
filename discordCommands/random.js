const api = require("../util/api");
const query = require("../queries/randomCharacter");
const { MessageEmbed } = require("discord.js");
const { shortenDescription } =  require("../util/shortenDescription")

module.exports = {
    name: 'r',
    run: async ({client, message, args}) => {
        if (!(isNaN(args[0]))){
            var popularityLimit = args[0]
        }
        else {
            var popularityLimit = 15000
        }
        do {var response = await api(query, {popularity: Math.floor(Math.random() * (popularityLimit) + 1)});
            if (response.error) {
                return response
        }
        var data = response.Character
        console.log(response)
        } while(data.media.nodes[0].type != "ANIME" || data.image.large  === null)
        let name = data.name.first;
        if (data.name.last != null){
            name += ` ${data.name.last}`;
        }
        const newEmbed = new MessageEmbed()
            .setTitle(name)
            .setURL(data.siteUrl)
            .setImage(data.image.large)
            .setDescription(shortenDescription(data.description));
        message.channel.send({embeds: [newEmbed]});
    }
}