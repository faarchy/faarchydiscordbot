const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
          .setAuthor('Faarchy', 'https://i.ibb.co/y6gjrP0/136363445-307100984071094-6864752298815352679-n.jpg')
          .setDescription('Pozdrav Moje nadimak je Faarchy,bavim se web Dizajnom,Programiranjem i nedavno sam poceo se baviti pravljenjem Discord Botova')
          .setTitle('Discord Bot Autor')
          .setURL('https://discord.com/oauth2/authorize?client_id=791567639657971732&permissions=0&scope=bot')
          .setColor('#FF2DOO')
          .setThumbnail('https://i.ibb.co/y6gjrP0/136363445-307100984071094-6864752298815352679-n.jpg')
          .setFooter(' |  Faarchy BOT (BETA VERSION) |')
          .addFields(
            { name: 'Instagram', value: 'Username:faarchy' },
            { name: 'Facebook', value: 'Link:https://www.facebook.com/dudox.maper', inline: true },
            { name: 'Discord', value: 'faarchy#9999' },
        )
 
    message.channel.send(embed)
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "-embed"
}   