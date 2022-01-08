const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js-selfbot")
module.exports = {
    name: "loli",
    description: "một em loli dễ thương",
    aliases: ['lolicon'],
    run: async(client, message, args) => {
        try {
            const data = fetch('https://lolis.clph.me/loli')
            const res = await data.json();
            const imageEmbed = MessageEmbed()
            .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${res.url})`)
            .setColor("BLUE")
            .setImage(res.url)
            message.channel.send(imageEmbed)
        } catch(e) {
            return message.channel.send("Có một vài vấn đề! Hãy thử lệnh khác nhé")
        }
        
    }
}

