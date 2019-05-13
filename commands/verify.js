exports.run = async (client, message, args, level) => {
    try{
        if(message.channel.type === "dm") return;
        var role = client.guilds.get('574656298436526081').roles.find(role => role.name === "Verified");
        client.guilds.get('574656298436526081').members.get(message.author.id).addRole(role);
        if(message.member.has(role.id)) {
            message.reply("You have already been verified!"); return;
        } else
        message.reply("Thank you for verifying yourself! You now have access to all of the channels on the server. We hope you have fun!")
            return;
    }catch(e){
        console.log(e.stack);
        }
    }
    exports.conf = {
        name: 'verify',
        aliases: []	
    };