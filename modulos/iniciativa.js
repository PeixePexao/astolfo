function dado(linha) {
    var props = linha.toString().split(',');
    var bonus = parseInt(props[1]); //O bonus é a segunda propriedade, mas ele começa a contar do zero.
    switch (props[2]) {
        case "N":
            var dado = Math.random() * (21 - 1) + 1  //EQUAÇÃO DO MATH.RANDOM(): Math.random() * (max - min) + min;
            dado = dado + bonus; 
            return Math.floor(dado);
            break;
        case "D":
            var dado1 = Math.random() * (21 - 1) + 1;
            var dado2 = Math.random() * (21 - 1) + 1;
            if (dado1 < dado2) {
                dado1 = dado1 + bonus;
                return Math.floor(dado1);
            }
            else {
                dado2 = dado2 + bonus;
                return Math.floor(dado2);
            }
            break;
        case "V":
            var dado1 = Math.random() * (21 - 1) + 1;
            var dado2 = Math.random() * (21 - 1) + 1;
            if (dado1 > dado2) {
                dado1 = dado1 + bonus;
                return Math.floor(dado1);
            }
            else {
                dado2 = dado2 + bonus;
                return Math.floor(dado2);
            }
            break;
    }
}
function compare(a, b) {
    return b - a
}
function iniciativa() {
    const fs = require('fs');
    const data = fs.readFileSync('fila.csv');
    var linhas = data.toString().split('\n');
    var dados = []
    var conteudo = '```ml\n'
    for (i = 0; i < linhas.length; i++) {
        if (i != (linhas.length - 1)) {
            var roll = dado(linhas[i]);
            dados.push(roll);
        }
    }
    var bind = []
    for (i = 0; i < dados.length; i++) {
        var nome = linhas[i].split(',');
        var dadopessoal = dados[i];
        pusher = nome[0] + ": " +dadopessoal;
        bind.push(pusher)
    }
    for (i = 0; i < dados.length; i++) {
        console.log(dados[i] + " (" + i + ")")
    }
    console.log(bind);
    for (i=0; i < bind.length; i++) {
        conteudo = conteudo + bind[i] + "\n";
    }
    conteudo = conteudo + "```"
    return conteudo
}

module.exports=iniciativa