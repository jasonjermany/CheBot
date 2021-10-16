
module.exports = {
	name: 'cheesefact',
	description: 'Sends a random cheese fact',
	execute(message, args) {

		let factarray = ["There is no exact information regarding the origin of cheese, archaeological studies have shown the origin of cheese dates as far back as 6000 BC. Studies also show that during that era cheese was made from cow’s milk and goats in Mesopotamia.",
            "There are more than 2000 varieties of cheese available worldwide, mozzarella is the favorite around the globe, and the most consumed.",
            "People of Greece are the largest consumers of cheese worldwide. An average person from Greece consumes around 27.3 kg of cheese every year, about ¾ of which is feta cheese.",
            "Pizza Hut is the largest cheese-using fast food giant, it uses approximately 300 million pounds of cheese annually, mostly on pizza.",   
            "Cheese production around the globe is more than the combined worldwide production of coffee, tobacco, tea, and cocoa beans.",
            "The first cheese factory was established in Switzerland in 1815, however successful mass production began in 1851 in the United States.",
            "Contrary to popular belief cheese, eaten in moderate quantities, is an excellent source of protein, calcium, and phosphorus. It’s saturated fat content is responsible for its bad reputation.",
            "In the United States the month of June is National Dairy Month and the last week of June is National Cheese Week.",
            "Cheese can be produced using a variety of milk including cow, buffalo, goat, horse, and even camel.",
            "A whopping 20 million metric tons of cheese is produced worldwide each year and production is increasing with growing demand.",
            "Approximately 10 pounds of milk is required to make one pound of cheese. If it wasn’t for cheese a lot of milk would have been wasted.",
            "Cheese is kept for a period of time before its ready to eat. Some varieties of cheese, blue cheese, gorgonzola, and brie are exposed to mold which helps them age properly.",
            "During the Roman Empire large Roman houses had separate kitchens for manufacturing cheese only, they were called careale.",
            'Some varieties of cheese like mozzarella, cheddar, Swiss and American, help prevent tooth decay. It promotes the flow of saliva which leads to elimination of sugar and acids from the mouth.',
            'Another benefit associated with cheese is that it helps protect tooth enamel and has an antibacterial effect. If consumed in moderate quantities it has various health benefits.',
            'Cheesemaking has been around for nearly 4,000 years, according to the International Dairy Foods Association.Though no one really knows who made the very first cheese, historical records indicate that travelers from Asia brought their technique of cheesemaking to Europe before the Roman Empire.',
            'Today, there are over over 2,000 varieties of cheeses.',
            'As a country, the U.S. produces the most cheese in the world annually.',
            'U.S. per capita cheese consumption is about 34 pounds per person—that’s more than one full ton of cheese during the average lifetime. The French eat the most cheese, putting away an average of 57 pounds per person a year.',
            'Mozzarella cheese is the biggest-selling cheese variety in the U.S., followed by Cheddar.',
            'The world’s most expensive sandwich is Serendipity’s “Quintessential Grilled Cheese” made with Caciocavallo Podolico cheese, a rare Italian variety made from the milk of free-ranging cows fed a diet of fennel grasses and wild strawberries, with a truffle spread and gold flakes. It retails for $214.'
        ];

        message.channel.send(factarray[Math.floor(Math.random() * factarray.length)]);
	}
};