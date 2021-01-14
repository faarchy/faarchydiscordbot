const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
          .setAuthor('| Faarchy BOT | ')
          .setTitle('Command List')
          .setColor('#FF2DOO')
          .setThumbnail('https://i.ibb.co/y6gjrP0/136363445-307100984071094-6864752298815352679-n.jpg')
          .setFooter(' |  Faarchy BOT (BETA VERSION) |')
          .addFields(
            { name: '-autor', value: 'Prikaz Autora Bota' },
            { name: '-play', value: 'Da pustite Muziku', inline: true },
            { name: '-pause', value: 'Da Pauzirate pjesmu' },
            { name: '-skip', value: 'Da Skipujete pjesmu' },
            { name: '-stop', value: 'Da Stopirate pjesmu' },
            { name: '-resume', value: 'Da prebacite na Drugu pjesmu' },
            { name: '-volume', value: 'Da podesite glasnocu pjesme' },
            { name: '-np', value: 'Da Pustite pjesmu ako se nije pustila na -play' },
            { name: '-info', value: 'Neke informacije BOTA' },
            
        )
 
    message.channel.send(embed)
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "-embed"
}   