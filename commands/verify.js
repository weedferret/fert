exports.run = async (client, message, args, level) => {
    try{
        if(message.channel.type === "dm") return;
        var role = message.guild.roles.find("name", "Verified");
        if (message.member.roles.find(r => r.name === 'Verified')) {
            message.reply("You are already verified!")
        } else {
            message.member.addRole(role).then(() => {
                message.author.send("Thank you for verifying yourself. You now have access to the rest of the server. Enjoy!")
            });
        }
    }catch(e){
        console.log(e.stack);
        }
    }
    exports.conf = {
        name: 'verify',
        aliases: []	
    };