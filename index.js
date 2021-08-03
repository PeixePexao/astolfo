require('dotenv').config(); // Inicializa o dotEnv
const Discord = require("discord.js"); //Importa a API do Discord
const criarPer = require('./modulos/criador.js');
const client = new Discord.Client(); //Inicializa a interface pessoal do bot
const buro = require('./modulos/handler.js')
const dano = require('./modulos/dano_cura.js')
const slots = require('./modulos/slots')
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if (msg.content.startsWith("-")) {
        var comandosep = buro(msg.content);
        if(comandosep[0] == "criarper" && checkID(msg.author.id)) {
            var cria = criarPer(comandosep);
            if (cria == false) {
                msg.channel.send('```diff\n-Opa, parece que você mandou o comando errado! A forma correta é -criarper NOME VIDA SL1 SL2 SL3 SL4 SL5 SL6 SL7 SL8 SL9 INICIATIVA\n```')
            }
            else {msg.channel.send('```diff\n+Foi criado o seu personagem. Obrigado por me usar <3\n```')}
        }
        if (comandosep[0] == "dano") {
            if(dano.dano(comandosep)) {
                msg.channel.send('```diff\n-Eita! ' + comandosep[1] + ' tomou ' + comandosep[2] + ' pontos de dano!\n```')
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "cura") {
            if(dano.cura(comandosep)) {
                msg.channel.send('```diff\nHoje não! ' + comandosep[1] + " regenerou " + comandosep[2] + " pontos de vida! <3\n```");
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "slots") {
            var resposta = slots(comandosep);
            if (resposta == "errado") {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
            else {
                msg.channel.send(resposta)
            }
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