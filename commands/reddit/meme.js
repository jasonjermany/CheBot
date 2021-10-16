const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
module.exports = {
	name: 'meme',
	description: 'grab meme from reddit',
	execute(message, args) {
        DabiClient.nsfw.real.meme().then(json => {
            console.log(json);
            message.channel.send('**``` >>> meme ```**' + json.url);
            // outputs data with image url, possible source and other stuff
        }).catch(error => {
            console.log(error);
            // outputs error
        });
    }
}
//npm install https://github.com/jasonjermany/dabi-images/tarball/master