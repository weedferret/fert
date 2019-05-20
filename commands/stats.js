exports.run = async (client, message, args, level) => {
    
    const Discord = require("discord.js");
try{
    module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let bembed = new Discord.RichEmbed()
        .setTitle("Bot Information")
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setThumbnail(bicon)
          .addField("Bot member size", bot.users.size, true)
          .addField("Bot guild size", bot.guilds.size, true)
          .addField("RAM usage", `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`)
          .addField("Created on", bot.user.createdAt)
          .addField("Developed by", "obscvre#7124")
          .addField("Discord version", `${Discord.version}`, true)
          .addField("Node version", `${process.version}`, true);
        message.channel.send(bembed);
    }
}catch(e){
    console.log(e.stack);
    }
}
exports.conf = {
	name: 'stats',
	aliases: []	//	Array of aliases for the command.
};    