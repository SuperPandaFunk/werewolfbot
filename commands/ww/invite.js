const Discord = require('discord.js-commando');
class inviteCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'ww',
            memberName: 'invite',
            aliases: [],
            description: 'Invite a player to join the game',
            guildOnly:true,
            args: [
                {
                    key: 'player',
                    prompt: "@playername",
                    type: 'string'
                }
            ]
        });
    }

    async run(message, { player }) {
        if (global.servers[message.guild.id]) {
            if (!global.servers[message.guild.id].stated) {
                message.mentions.members.first().user.send(`***${message.author.username}*** invited you to play a game of werewolf! \n
                Type: ***join*** at ${message.guild.name}`);
            }
        }

    }
}
module.exports = inviteCommand;