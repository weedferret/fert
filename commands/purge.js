exports.run = async (client, message, args, level) => {
        if (!message.member.roles.exists('name', 'Administrator')) return;
        const deleteCount = parseInt(args[0], 10);
        
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      
      }


exports.conf = {
	name: 'purge',
	aliases: []	//	Array of aliases for the command.
};