const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
          .setAuthor('FAARCHY BOT INFO')
          .setDescription('Ovo su neke Osnovne informacije o botu.Bot sadrzi muzicki dio gdje se moze muzika slusati,i sadrzi welcome bot kada neko udje na server on pokaze ko je Usao i pozeli mu dobrodoslicu.Kreator bota je Faarchy')
          .setTitle('Invite to SERVER')
          .setURL('https://discord.com/oauth2/authorize?client_id=791567639657971732&permissions=0&scope=bot')
          .setColor('#FF2DOO')
          .setThumbnail('https://i.ibb.co/y6gjrP0/136363445-307100984071094-6864752298815352679-n.jpg')
          .setFooter(' |  Faarchy BOT (BETA VERSION) |')
          .addFields(
            { name: 'Datum Kreiranja', value: '8.1.2021' },
            { name: 'Invite Link', value: 'https://discord.com/api/oauth2/authorize?client_id=791567639657971732&permissions=0&scope=bot', inline: true },
            { name: 'Discord Server', value: 'USKORO' },
        )
 
    message.channel.send(embed)
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "-embed"
}   