require('dotenv').config(); // Inicializa o dotEnv
const Discord = require("discord.js"); //Importa a API do Discord
const criarPer = require('./modulos/criador.js');
const client = new Discord.Client(); //Inicializa a interface pessoal do bot
const buro = require('./modulos/handler.js')
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if (msg.content.startsWith("-")) {
        var comandosep = buro(msg.content);
        if(comandosep[0] = "criarper" && checkID(msg.author.id)) {
            var cria = criarPer(comandosep);
            if (cria == false) {
                msg.channel.send('```diff\n-Opa, parece que você mandou o comando errado! A forma correta é -criarper NOME VIDA\n```')
            }
            else {msg.channel.send('```diff\n+Foi criado o seu personagem. Obrigado por me usar <3\n```')}
        }
    }
})

client.login(process.env.TOKEN); //Loga como o bot no Discord

function checkID(idSender) {
    if (idSender == process.env.IDMAT || idSender == process.env.IDMEU || idSender == process.env.IDSIQ) {
        return true
    }
    else {
        return false
    }
}