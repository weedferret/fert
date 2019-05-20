exports.run = async (client, message, args, level) => {
    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("You are missing the permission `KICK_MEMBERS` and cannot use this command.");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server.");
    if(!member.kickable) 
      return message.reply("I cannot kick this user. They may have a higher role, or I may not have the correct permissions.");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author}, I couldn't kick because of : ${error}`));
    return message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because ${reason}.`);
}

exports.conf = {
	name: 'kick',
	aliases: []
};