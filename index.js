const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("The bot is active and ready to go!");
});
 
bot.on('message', message => {
    let args = message.content.substring(config.prefix.length).split(" ");
 
    switch (args[0]) {
 
        case "website":
            bot.commands.get('website').execute(message, args);
        break;

        case "shoppy":
            bot.commands.get('shoppy').execute(message, args);
        break;

        case "status":
            bot.commands.get('status').execute(message, args);
        break;

        case "commands":
            bot.commands.get('commands').execute(message, args);
        break;

        case "clear":
            bot.commands.get('clear').execute(message, args);
        break;

     }
})

bot.login(config.token);
