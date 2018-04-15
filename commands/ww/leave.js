const Discord = require('discord.js-commando');
class leaveCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'ww',
            memberName: 'leave',
            aliases: ['leavegame','exitgame','exit'],
            description: 'Join a game',
            guildOnly: true,
            args: [
                {
                    key: 'isleaving',
                    prompt: "Are you sure you want to leave? type Yes if so",
                    type: 'string',
                    validate: isleaving =>{
                        if (isleaving.toLowerCase() == 'yes') return true;
                        return 'you are staying the game';
                    }
                }
            ]
        });
    }

    async run(message, { isleaving}) {
        if (global.servers[message.guild.id]) {
            if (!global.servers[message.guild.id].stated) {
                var userFound = false;                
                global.servers[message.guild.id].players = global.servers[message.guild.id].players.filter((element)=>{
                    if(element.player.id == message.author.id)
                    {
                        userFound = true;
                        return false;
                    }
                    return true;
                });
                if (userFound)
                {
                    message.say(`**${message.author.username}** has leaved the lobby!`);
                }else
                {
                    message.reply(`You were not in the lobby`);
                }
            }
            else {
                //Manage when the game is started!!!
                message.reply(`The game is already started.`);
            }
        }
        else {
            message.reply(`There is no game initialize. \n`);
        }
    }
}
module.exports = leaveCommand;