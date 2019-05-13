exports.run = async (client, message, args, level) => {
try{
    const { get } = require("superagent");
const fact = await get("https://catfact.ninja/fact")
.then((res) => res.body.fact);
    message.channel.send(`🐈📢 **Felidae Fact:** *${fact}*`)
}catch(e){
    console.log(e.stack);
    }
}

exports.conf = {
	name: 'catfacts',
	aliases: [
        "catfact"
    ]	//	Array of aliases for the command.
};