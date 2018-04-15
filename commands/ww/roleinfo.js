const Discord = require('discord.js-commando');
const {roles} = require('../../roles.json');
class rolesCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'roleinfo',
            group: 'ww',
            memberName: 'roleinfo',
            aliases: ['role'],
            description: 'Display the info of a role',
            args: [
                {
                    key: 'role',
                    prompt: "role's name",
                    type: 'string'
                }
            ]
        });
    }

    async run(message, { role}) {
        var therole = roles.find((element)=>{
            return element.type.toLowerCase() === role.toLowerCase();
        });
        if (therole){
            message.say(`${therole.icon} \t ${therole.type} \n ${therole.description}`);
        }else{
            message.say(`${role} was not found`);
        }
    }
}
module.exports = rolesCommand;