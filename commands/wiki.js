exports.run = async (client, message, args, level) => {
    if (args.length < 1) return;
    const { RichEmbed } = require('discord.js');
    const entrySearch = args[0].toLowerCase();
    const entryPath = `./storage/wiki/${entrySearch}.json`;
    const fs = require('fs');
try{
    fs.stat(entryPath, (err, stat) => {
        if (err == null) {	//	Found file
            fs.readFile(entryPath, (err, data) => {
                if (err) throw new Error (err);
                
                let entry = JSON.parse(data);
                let embed = new RichEmbed()
                                .setTitle(entry.title)
                                .setURL(entry.url)
                                .setThumbnail(entry.image)
                                .setDescription(entry.description)
                                .setColor(entry.color);
        
                return message.channel.send({ embed });
            });
        } else if (err.code == "ENOENT") {
            return message.reply("No entry for your search, please check your spelling or contact an administrator if the issue persists.");
        }
    });
}catch(e){
    console.log(e.stack);
    }
}

exports.conf = {
	name: 'wiki',
	aliases: []	//	Array of aliases for the command.
};