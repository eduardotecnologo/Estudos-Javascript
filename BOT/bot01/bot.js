const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} iniciado!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

// Token do Discord
client.login('teoken');

// Exemplo de respostas do bot, ou crie um arquivo e importa ele em um objeto
client.on('message', msg => {
  if (msg.content === 'Alguem tem essa?') {
    msg.reply('Vai estudar cara!!!');
  }
})
