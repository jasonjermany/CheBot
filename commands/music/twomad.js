const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'twomad',
	description: 'play twomad in vc',
	async execute(message, args) {
        if (!message.member.voice.channel) return message.channel.send("You're not in a voice channel?");
        
        let stream = ('https://cdn.sndup.net/9sk6/That+was+so+retarted+Im+gonna+respond+in+a+different+language+meme.mp3?token=RJckPsxNpcPY2YXr52Yw3a9LIDAASC7A0SHsFD73dn8&token_path=%2F9sk6%2F&expires=1606881254');
        
        message.member.voice.channel.join()
        .then(connection => {
            console.log('playing');
            message.channel.send('Now playing: Lord Twomad')
            let dispatcher = connection.play(stream)
            .on("finish", () => {
                message.guild.me.voice.channel.leave();
            })
        });
    }
}