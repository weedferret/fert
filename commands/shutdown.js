exports.run = async (client, message, args, level) => {
    message.channel.send("Shutting down...").then(() => {
        bot.destroy().then(() => {
            console.log("Bot shut down.");
            process.exit(1);
        }).catch(err => {
            console.log("Error when shutting down, wtf?", err);
            process.exit(1);
        });
    });
}

exports.conf = {
	name: 'shutdown',
	aliases: [
        "crash",
        "stop"
    ]
};