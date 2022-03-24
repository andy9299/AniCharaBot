const {getFiles} =  require("../util/functions")

module.exports = (bot) => {
    const {client} = bot

    let events = getFiles("./events/", ".js")
    console.log(events)
    events.forEach((file, i) => {
        const event = require(`../events/${file}`)
        client.events.set(event.name, event)
        console.log(`${i + 1}) ${file} event loaded`)
    })
    initEvents(bot)
}

function triggerEventHandler(bot, event, ...args){
    const {client} = bot

    try {
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else 
            throw new Error(`${event} does not exist`)
    }
    catch(err){
        console.error(err)
    }
}

function initEvents(bot) {
    const {client} = bot
    client.on("ready", () =>{
        triggerEventHandler(bot, "ready")
    })
    client.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
}