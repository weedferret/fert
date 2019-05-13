exports.run = async (client, message, args, level) => {
  const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()    
        .setTitle("Ferret Boye's List of Commands")
        .setColor("RANDOM")
        .addField("Fun Commands", ".8ball\nResponds with an 8ball answer.\n\n.catfacts, .catfact\nResponds with a cat fact!\n\n.dogs, .ilikedogs\nShows a photo of a cute doggo. Photos courtesy of https://dog.ceo.\n\n.talk\nTalk to me!")
        .addField("Minecraft Commands", "|mcserver <server IP:port>\nLooks up a server's information.\n\n|mcskin <UUID>, |mcskin <username>\n Retrieves the skin of a specified player.\n\n|mcstat\nShows Mojang's service status.\n\n|mcusername <UUID>\nRetrieves the username of a UUID.\n\n|mcuuid <username>\nRetrives the UUID of a username.")
		    .addField("Informational/Misc. Commands", ".avatar, .avatar [@username]\nDisplays your own avatar, or if mentioned, another user's avatar.\n\n.poll [question] <option 1> <option 2> Have others vote between two choices! Minimum of two choices and maximum of twenty five choices.\n\n.stats\nDisplays bot statistics.\n\n.suggest <suggestion>, .suggestion <suggestion>\nAllows users to make a suggestion, which will then be shown on the suggestions channel.\n\n.userinfo, .userinfo [@username]\nDisplays information about your Discord account, or if mentioned, another user's account.");
    message.react("📧")
	return message.author.send(embed);
};

exports.conf = {
	name: 'help',
	aliases: []
};