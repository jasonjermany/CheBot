module.exports = {
    execute(message,args){
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
}
}