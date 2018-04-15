const Discord = require('discord.js-commando');
class newgameCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'new',
            group: 'ww',
            memberName: 'new',
            aliases: ['new','newgame','init','initgame','create'],
            description: 'Generate a new werewolf game',
            guildOnly:true
        });
    }

    async run(message, args) {
            if (global.servers[message.guild.id])
            {
                message.say(`A game is already initialize`);
            }else
            {
                global.servers[message.guild.id] = 
                {
                    players:[],
                    roles:[],
                    isStarted: false,
                    isRoleSelected: false,
                }
                message.say(`___Game as been initialize!___ \n 
                Type: ***join*** to join the lobby \n
                Type: ***invite*** to invite a player \n
                Type: ***leave*** to leave the lobby \n`);
            }
    }
}
module.exports = newgameCommand;