const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'YOUR_TOKEN_HERE';
client.on('message' , msg=>{
    if(msg.content ===  "nuke confirm"){
        async function wipe() {
        var msg_size = 100;
        while (msg_size == 100) {
            await msg.channel.bulkDelete(100)
        .then(messages => msg_size = messages.size)
        .catch(console.error);
        }
        msg.channel.send(`Nuke Complete!`)
    }
    wipe()
    }
})

client.login(token);