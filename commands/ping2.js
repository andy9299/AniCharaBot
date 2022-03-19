module.exports = {
    name: 'ping2',
    description: "pings",
    execute(message, args){
        message.channel.send('pong2');
    }
}