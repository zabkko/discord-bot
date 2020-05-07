module.exports = {
    name: 'status',
    description: "says if we're online or not",
    execute(message, args){
        message.channel.send('We are online');
    }
}