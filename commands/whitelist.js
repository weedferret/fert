exports.run = async (client, message, args, level) => {
    const Discord = require("discord.js");
    if(message.channel.type === "dm") return;
    if (message.member.roles.find(r => r.name === 'Whitelisted')) {
        message.reply("You have already been whitelisted!")
            return;
    }
    let whitelist = args.join(" ").slice(0);
        if(!whitelist) return message.reply("No username was given.");
    let whitelistEmbed = new Discord.RichEmbed()
        .setDescription("Whitelist Request")
        .addField("Requester:", `${message.author}`)
        .addField("Minecraft Username", whitelist)
        .setTimestamp();
        
        let whitelistchannel = message.guild.channels.find(`name`, "whitelist-requests");
        whitelistchannel.send(whitelistEmbed);
        message.reply("Thank you for sending your whitelist request! It is currently being reviewed by our staff. Hang on while we process your request.")
        message.react("✅")
}

exports.conf = {
	name: 'whitelist',
	aliases: []	//	Array of aliases for the command.
};
