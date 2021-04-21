const Discord = require ('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login('ODM0MzIyNTgwMTc3NTUxNDEx.YH_NdA.gD40fvxwgfGtQ3b0zyCZwr2Wl74');

client.on('message', message => {
  if (message.content === '!ping'){
    message.channel.send('Pong!');
  }
});
