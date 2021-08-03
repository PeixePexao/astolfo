require('dotenv').config(); // Inicializa o dotEnv
const Discord = require("discord.js"); //Importa a API do Discord
const client = new Discord.Client(); //Inicializa a interface pessoal do bot

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if (msg.content == "ping") {
        msg.reply("pong");
    }
})

client.login(process.env.TOKEN); //Loga como o bot no Discord