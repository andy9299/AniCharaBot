const api = require("../util/api");
const query = require("../queries/randomCharacter");
const Discord = require("discord.js");

const cd = 15000;

module.exports = {
    name: 'g',
    cooldown: cd,
    run: async ({ client, message, args }) => {
        if (!(isNaN(args[0]))) {
            var popularityLimit = args[0];
        }
        else {
            var popularityLimit = 7500;
        }
        do {
            var response = await api(query, { popularity: Math.floor(Math.random() * (popularityLimit) + 1) });
            if (response.error) {
                return response;
            }
            var data = response.Character;
        } while (data.media.nodes[0].type != "ANIME" || data.image.large === null);
        let name = data.name.first;
        if (data.name.last != null) {
            name += ` ${data.name.last}`;
        }
        const newEmbed = new Discord.MessageEmbed()
            .setTitle("Guess the Character!")
            .setImage(data.image.large);
        message.channel.send({ embeds: [newEmbed] });
        let collectorFilter = m => !m.author.bot;
        const collector = new Discord.MessageCollector(message.channel, {
            time: cd,
            filter: collectorFilter
        });
        collector.on('collect', ansMessage => {
            if (ansMessage.content.toLowerCase() == name.toLowerCase()) {
                collector.stop();
                ansMessage.reply("Congrats!");
            }
        });
        collector.on('end', () => {
            message.channel.send(`The character was ${name}!`);
        });
    }
};