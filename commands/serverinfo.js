exports.run = async (client, message, args, level) => {
    let sicon = message.guild.iconURL;
    const Discord = require("discord.js")
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name, true)
    .addField("Total Members", message.guild.memberCount, true)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt);
    
    message.channel.send(serverembed);};

exports.conf = {
	name: 'serverinfo',
	aliases: []	//	Array of aliases for the command.
};