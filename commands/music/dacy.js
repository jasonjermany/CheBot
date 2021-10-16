const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'dacy',
	description: 'play dacy in vc',
	async execute(message, args) {
        if (!message.member.voice.channel) return message.channel.send("You're not in a voice channel?");
        
        let stream = ('https://sndup.net/8zvb/Brawlhalla_2020-10-02_21-43-11_Trim.mp3');
        
        message.member.voice.channel.join()
        .then(connection => {
            console.log('playing');
            message.channel.send('Now playing: Dacy being gay for Gami.')
            let dispatcher = connection.play(stream)
            .on("finish", () => {
                message.guild.me.voice.channel.leave();
            })
        });
    }
}
