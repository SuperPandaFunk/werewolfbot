const Discord = require('discord.js-commando');
class joinCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'join',
            group: 'ww',
            memberName: 'join',
            aliases: ['joingame'],
            description: 'Join a game',
            guildOnly: true
        });
    }

    async run(message, args) {
        if (global.servers[message.guild.id]) 
        {
            if (!global.servers[message.guild.id].stated)
            {
                var isIn = global.servers[message.guild.id].players.filter((element) => {
                    return element.player.id == message.author.id;
                });
                if(isIn.length == 0)
                {
                    global.servers[message.guild.id].players.push({
                        player: message.author
                    });
                    message.say(`**${message.author.username}** has joined the lobby!`);
                }else
                {
                    message.reply(`you are already in the lobby!`);
                }
  
            }
            else
            {
                message.reply(`The game is already started.`);
            }

           
        } 
        else {
            message.reply(`There is no game initialize. \n
            Type: ***new*** to initialize a game \n`);
        }
    }
}
module.exports = joinCommand;