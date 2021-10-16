
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'changenick',
	description: 'changes nickname',
	execute(message, args) {
        let member = message.mentions.members.first();
        let nickReason = args.join(" ").slice(22);

        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
        if(!member) return message.channel.send('@ someone');
    
        member.setNickname(nickReason).then((member) => {
            message.channel.send(`successfully changed ${member}'s nickname.`);
		})
	}
};