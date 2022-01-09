const { MessageEmbed } = require("discord.js-selfbot")
const hmtai = require("hmtai");
module.exports = {
    name: "bdsm",
    description: "",
    aliases: ['ava'],
    run: async (client, message, args) => {
            const image = await hmtai.nsfw.bdsm()
            const imageEmbed = new MessageEmbed()
            .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${image.url})`)
            .setColor("BLUE")
            .setImage(image)
            message.channel.send(imageEmbed);
    }
}

