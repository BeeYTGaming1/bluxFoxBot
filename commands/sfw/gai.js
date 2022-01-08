const { MessageEmbed } = require("discord.js-selfbot")
const fetch = require('node-fetch');
const api_key = require('6Z97cipHvbVj7pgQb0m7jjag6EqiOfWwxMF54LXI9YWGE8Fs72')
module.exports = {
  name: "girl",
  description: "một em loli dễ thương",
  aliases: ['gai'],
    run: async (client, message, args) => {
        let searchEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor('Đợi mình tí mình đang tìm...', client.user.displayAvatarURL({ size: 1024, dynamic: true })).setAuthor('Đang tìm kiếm, vui lòng đợi...', 'https://cdn.discordapp.com/emojis/892292745916481556.gif?size=128')
        let searching = await message.channel.send(searchEmbed)

        const rd = Math.floor(Math.random() * 941)
        const url = encodeURI(`https://api.tumblr.com/v2/blog/gaixinhchonloc.com/posts/photo?api_key=${api_key}&limit=1&offset=${rd}`)
        await fetch(url)
        .then (res => res.json())
        .then(json => {
            //không trả về thì gửi về embed lỗi
            const noData = new MessageEmbed()
            .setColor('RED')
            .setDescription(`Có lỗi xảy ra trong quá trình tìm ảnh!`)
            if(!json.response) return searching.edit(noData)

            //nếu có thì trả về ảnh
            const imageEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${json.response.posts[0].summary}`)
            .setImage(`${json.response.posts[0].photos[0].original_size.url}`)
            .setAuthor('Hình ảnh: Girl/Gái xinh chọn lọc', client.user.displayAvatarURL({ size: 1024, dynamic: true }))
            .setTimestamp()
            .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            
            return searching.edit(imageEmbed)
        })
    }
}