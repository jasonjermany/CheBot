const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.commands.music = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commandFiles1 = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));
const commandFiles2 = fs.readdirSync('./commands/reddit').filter(file => file.endsWith('.js'));

const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
const { OpusEncoder } = require('@discordjs/opus');
const db = require('quick.db');

client.queue = new Map()
// client.mongoose = require('./commands/mongoose');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
for (const file of commandFiles1) {
	const command1 = require(`./commands/music/${file}`);
	client.commands.set(command1.name, command1);
}
for (const file of commandFiles2) {
	const command2 = require(`./commands/reddit/${file}`);
	client.commands.set(command2.name, command2);
}


client.once('ready', () => {
    console.log('Ready!');
})

client.login(token);

const beef = new db.table('beef')
const marius = new db.table('marius')
client.on('message', async (message) => {

    function dupeInc(obj,word){
        if(message.content.toLowerCase().includes(word)){
            const splitMessage =message.content.toLowerCase().split(/[\s,]+/);
    
            for(let i = 0; i<splitMessage.length;++i){
                if(splitMessage[i].includes(word)){
                    obj.add(`globalMessages_${message.author.id}`, 1);
                    obj.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);
                }
            }
        }
    }
    dupeInc(beef,'beef');
    dupeInc(marius,'marius');
    

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
    
})



