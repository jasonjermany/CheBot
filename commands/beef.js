const db = require('quick.db');
const beef = new db.table('beef')
module.exports = {
	name: 'beef',
	description: 'beef count',
	async execute(message, args) {
        

        
        let member = message.mentions.members.first() || message.member;
        
        let global = await beef.fetch(`globalMessages_${member.id}`);
        let guild = await beef.fetch(`guildMessages_${member.guild.id}_${member.id}`);
        //message.channel.send(`**beef count:**\`${value}\``)
        message.channel.send(`**You've said beef \`${global}\` times in every server. \nYou've said beef \`${guild}\` times in this server.**`);
        
	}
};