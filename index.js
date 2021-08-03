require('dotenv').config(); // Inicializa o dotEnv
const Discord = require("discord.js"); //Importa a API do Discord
const criarPer = require('./modulos/criador.js');
const client = new Discord.Client(); //Inicializa a interface pessoal do bot
const buro = require('./modulos/handler.js')
const dano = require('./modulos/dano_cura.js')
const slots = require('./modulos/slots')
const recuperar = require('./modulos/recuperar.js')
const castar = require('./modulos/castar.js')
const addFila = require('./modulos/addFila.js')
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
        if (comandosep[0] == "recuperar") {
            if(recuperar(comandosep)) {
                msg.channel.send('```diff\n+' + comandosep[1] + ' recuperou suas magias! <3\n```');
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "castar") {
            var cast = castar(comandosep);
            switch(cast) {
                case "erroNE":
                    msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
                    break;
                case "erroSM":
                    msg.channel.send('```diff\n-Opa, me parece que o jogador não tem mais slots de magia desse nível, que pena <3');
                    break;
                case "sucesso":
                    msg.channel.send('```diff\n+Uau! ' + comandosep[1] + ' castou uma magia de nível ' + comandosep[2] + ' <3\n```');
                    break 
            }

        }
        if (comandosep[0] == "addfila") {
            if(addFila(comandosep)) {
                msg.channel.send("```diff\n+" + comandosep[1] + " foi adicionado à fila. <3```");
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
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