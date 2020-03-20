const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkwNjA4ODUzOTU5NzA0Njc4.XnUnpg.YIBaseKN8FYGRB6mZ4S2ToebtWE';

const PREFIX = '/';

bot.on('ready', () => {
    console.log('Online');
})

bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.reply('nerd');
        break;    
    }
})

bot.login(token);