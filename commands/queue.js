'ping';


const Discord = require('discord.js');


const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === ';autor') {
    message.channel.send('Pozdrav Svima,ja se bavim Web Dizajnom i Programiranjem.Nedavno sam poceo praviti discord botove!');
    message.channel.send('Zapratite me Na Mom Instagram profilu @faarchy!');
  }
});

client.login('Nzk0OTk3MzYzOTU2Nzc2OTcw.X_C8_Q.BPjR8ry6JmUz_HKCNAoq3sflMBs');
