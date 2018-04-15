const Discord = require('discord.js-commando');
const { Token } = require('./botvalues.json');
global.servers = {};

const bot = new Discord.Client(
    {
        commandPrefix: 'ww.'
    }
);

bot.registry.registerGroup('ww', 'WEREWOLF');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    bot.user.setGame('🐺WereWolf🐺');
})

bot.login(Token);