const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", async member => {
member.guild.channels.get('583623939503292426').send('**Welcome To Darkside. :sparkles:')
});

client.login('BOT_TOKEN');
