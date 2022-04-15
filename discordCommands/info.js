const api = require("../util/api");
const query = require("../queries/searchCharacter");
const { MessageEmbed } = require("discord.js");
const { shortenDescription } =  require("../util/shortenDescription")

module.exports = {
    name: 'info',
    run: async ({client, message, args}) => {
        let userEntry = args.join(' ');
        const response = await api(query, {search: userEntry});
        if (response.error) {
            return response;
        }
        const data = response.Character;
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