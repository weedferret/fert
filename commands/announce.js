exports.run = async (client, message, args, level) => {
try{
    const Discord = require("discord.js");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have sufficient permissions (`MANAGE_MESSAGES`) to announce in a channel.");
    if (!args[0] || !message.mentions.channels.first() || !args[1]) {
        message.reply("Please put an **announcement channel** and a **message**.")
         return;
    }
    let embedmsg = args.splice(1).join(' ');
    let announceembed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setAuthor('Announcement from: ' + message.author.username)
    .setTimestamp()
    .setDescription(embedmsg);
    let announceChannel = message.mentions.channels.first();
    message.guild.channels.find(t => t.id == announceChannel.id).send(announceembed);
}catch(e){
        console.log(e.stack);
        }
}
exports.conf = {
	name: 'announce',
	aliases: []	//	Array of aliases for the command.
};