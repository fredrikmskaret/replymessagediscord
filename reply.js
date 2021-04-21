const Discord = require ('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login('TOKEN');

client.on('message', message => {
  if (message.content === '!ping'){
    message.channel.send('Pong!');
  }
});
