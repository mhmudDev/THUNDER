const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("576374909496983582");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Weclome To Darkside.** :sparkles:`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
