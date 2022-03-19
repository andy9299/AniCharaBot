module.exports = {
    name: 'ping',
    description: "pings",
    execute(message, args){
        message.channel.send('pong');
    }
}