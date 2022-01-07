const client = require("../index");

client.on("message", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
 !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;
if(!message.channel.nsfw) return message.channel.send("Bạn vô kênh nsfw mà coi nhé!")
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase())

    if (!command) return;
    await command.run(client, message, args);
});
