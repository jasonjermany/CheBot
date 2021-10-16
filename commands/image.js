
const cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
const request = require("request");
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'image',
	description: 'Sends a random cheese fact',
	execute(message, args) {

        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + message.content.slice(7),
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
    

        request(options, function (error, response, responseBody) {
            if (error) {
                return;
            }
    
    
            $ = cheerio.load(responseBody);
    
    
            var links = $(".image a.link");
    
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
    
            if (!urls.length) {
                return;
            }
    
            // Send result
            let rand = urls[Math.floor(Math.random() * urls.length)];
            

            const embed = new Discord.MessageEmbed()
                .setTitle(message.content.slice(7))
                .setImage(rand);
            message.channel.send({embed});
        });
    
	}
};
