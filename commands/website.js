module.exports = {
    name: 'website',
    description: "says link on our website",
    execute(message, args){
        message.channel.send('https://alphahours.xyz/');
    }
}