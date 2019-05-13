exports.run = async (client, msg, [question, ...option]) => {
try{
    const Discord = require("discord.js");
    if (!question) { return msg.reply("You need to provide a question."); }
    else if (option.length < 2) { return msg.reply("You need to provide at least two options!"); }
    else if (option.length > 25) { return msg.reply("Whoa! You have a giant list of options! Not even I can handle all of these!"); }

    var emote = ["✅", "❎", "☑", "✔", "❌", "✖", "⭕", "🔘"];

    msg.delete().catch();
    let embed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTimestamp()
        .setDescription(`A poll has been started by ${msg.author.username}!`)
        .addField("Question: ", `${question}`);

    for (var x = 0; x < option.length; x++) { embed.addField(`Option ${x + 1} - ${emote[x]}:`, option[x]); }

    const message = await msg.channel.send({embed});
    for (var x = 0; x < option.length; x++) { message.react(emote[x]); }
    }
    catch(e){
        console.log(e.stack);
        }
};


exports.conf = {
	name: 'poll',
	aliases: []	//	Array of aliases for the command.
};