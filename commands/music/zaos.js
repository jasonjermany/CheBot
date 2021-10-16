const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'zaos',
	description: 'play Zaos in vc',
	async execute(message, args) {
        if (!message.member.voice.channel) return message.channel.send("You're not in a voice channel?");
        
        let stream = ('https://cdn.sndup.net/3tkc/Editor61.mp3?token=tRXu_xuvlR3Cn4g_DDG5Vwvu3ZxIyvlFjEES_dQ08DI&token_path=%2F3tkc%2F&expires=1606881370');
        
        message.member.voice.channel.join()
        .then(connection => {
            console.log('playing');
            message.channel.send('Now playing: Zaos being gay for Gami.')
            let dispatcher = connection.play(stream)
            .on("finish", () => {
                message.guild.me.voice.channel.leave();
            })
        });
    }
}