const { MessageEmbed } = require("discord.js-selfbot")
const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: "randomhentaigif",
    description: "",
    aliases: ['rhGif'],
    run: async(message, args, client) => {
        try {
            const image = await neko.nsfw.randomHentaiGif()
            const imageEmbed = MessageEmbed()
            .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${image.url})`)
            .setColor("BLUE")
            .setImage(image.url)
            message.channel.send(imageEmbed)
        } catch(e) {
            return message.channel.send("Có một vài vấn đề! Hãy thử lệnh khác nhé")
        }
        
    }
}
