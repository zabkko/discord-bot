module.exports = {
  name: 'clear',
  description: 'Clears old messages',
  execute(message, args){
    count = parseInt(args);
    const Discord = require('discord.js');
    if(!args[0]) {
      return message.channel.send("Please define how much messages you want delete");
    } else {
      message.channel.bulkDelete(count).then(() => {}).catch();
    }
  }
}
 
module.exports.help = {
}