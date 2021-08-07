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
const fila = require('./modulos/fila.js')
const remFila = require('./modulos/remFila.js')
const status = require('./modulos/status.js')
const iniciativa = require('./modulos/iniciativa')
const hptemp = require("./modulos/hptemp.js")
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    if (msg.content.startsWith("-")) {
        var comandosep = buro(msg.content);
        if(comandosep[0] == "criarper" && checkID(msg.author.id)) {
            var cria = criarPer(comandosep);
            if (cria == false) {
                msg.channel.send('```diff\n-Opa, parece que você mandou o comando errado! A forma correta é -criarper NOME VIDA SL1 SL2 SL3 SL4 SL5 SL6 SL7 SL8 SL9\n```')
            }
            else {msg.channel.send('```diff\n+Foi criado o seu personagem. Obrigado por me usar <3\n```')}
        }
        if (comandosep[0] == "dano" && checkID(msg.author.id)) {
            if(dano.dano(comandosep)) {
                msg.channel.send('```ml\nEita! ' + comandosep[1] + ' tomou ' + comandosep[2] + ' pontos de dano!\n```')
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "cura" && checkID(msg.author.id)) {
            if(dano.cura(comandosep)) {
                msg.channel.send('```ml\nHoje não! ' + comandosep[1] + " regenerou " + comandosep[2] + " pontos de vida! <3\n```");
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "slots" && checkID(msg.author.id)) {
            var resposta = slots(comandosep);
            if (resposta == "errado") {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
            else {
                msg.channel.send(resposta)
            }
        }
        if (comandosep[0] == "recuperar" && checkID(msg.author.id)) {
            if(recuperar(comandosep)) {
                msg.channel.send('```ml\n' + comandosep[1] + ' recuperou suas magias! <3\n```');
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "castar" && checkID(msg.author.id)) {
            var cast = castar(comandosep);
            switch(cast) {
                case "erroNE":
                    msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
                    break;
                case "erroSM":
                    msg.channel.send('```diff\n-Opa, me parece que o jogador não tem mais slots de magia desse nível, que pena <3');
                    break;
                case "sucesso":
                    msg.channel.send('```ml\nUau! ' + comandosep[1] + ' castou uma magia de nível ' + comandosep[2] + ' <3\n```');
                    break 
            }

        }
        if (comandosep[0] == "addfila" && checkID(msg.author.id)) {
            if(addFila(comandosep)) {
                msg.channel.send("```ml\n" + comandosep[1] + " foi adicionado à fila. <3```");
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "fila" && checkID(msg.author.id)) {
            msg.channel.send(fila())
        }
        if (comandosep[0] == "remfila" && checkID(msg.author.id)) {
            if (remFila(comandosep)) {
                msg.channel.send("```ml\n" + comandosep[1] + " foi removido da fila de iniciativa!\n```");
            }
            else {
                msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');
            }
        }
        if (comandosep[0] == "status" && checkID(msg.author.id)) {
            msg.channel.send(status());
        }
        if (comandosep[0] == "iniciativa" && checkID(msg.author.id)) {
            msg.channel.send(iniciativa())
        }
        if (comandosep[0] == "addtemp" && checkID(msg.author.id)) {
            if (hptemp.addtemp(comandosep)) {msg.channel.send("```ml\n" + comandosep[1] + "ganhou " + comandosep[2] + " pontos de vida temporários\n```") }
            else {msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');}
        }
        if (comandosep[0] == "remtemp" && checkID(msg.author.id)) {
            if (hptemp.remtemp(comandosep)) {msg.channel.send("```ml\n" + comandosep[1] + "perdeu " + comandosep[2] + " pontos de vida temporários\n```") }
            else {msg.channel.send('```diff\n-Não consegui executar esse comando. Tem certeza que o digitou corretamente? <3\n```');}
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