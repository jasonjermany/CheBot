

module.exports = {
	name: 'dm',
	description: 'dms',
	execute(message, args) {
		let mentioneddude = message.mentions.members.first();
    if (!mentioneddude) return message.channel.send('Please mention a user.')

    let message2 = message.content.slice(27);
    if (!message2) return message.channel.send('Please provide a message.')

    mentioneddude.send(message2);

    message.channel.send(`successfully dm'd ${mentioneddude}: ${message2}`);

    message.delete();
	}
};


