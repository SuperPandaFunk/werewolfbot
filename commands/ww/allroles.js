const Discord = require('discord.js-commando');
const {roles} = require('../../roles.json');
class allroleCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'allroles',
            group: 'ww',
            memberName: 'allroles',
            aliases: ['roles'],
            description: 'Display all the roles'
        });
    }

    async run(message, args) {
        var tosend = "";
        roles.sort(function (a, b) {
            var x = a.type.toLowerCase();
            var y = b.type.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
        roles.forEach(element => {
            tosend += `${element.icon} \t ${element.type} \n`
        });
        tosend += "\nFor more info write ***roleinfo [role name]***"
        message.say(tosend);


    }
}
module.exports = allroleCommand;