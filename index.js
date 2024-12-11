const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

const fs = require('fs');
const path = require('node:path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on(Events.InteractionCreate, async interaction => {
  console.log('interaction', interaction)
  interaction.reply({
    content: 'Pong henrique kkk!',
    ephemeral: true,
  });
});

client.on('messageCreate', (message) => {
  console.log(message.content)
  if (message.content === 'ping') {
    message.reply({
      content: 'pong henrique kkkk',
    });
  }
});

client.login(token)