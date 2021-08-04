function fila() {
    const fs = require('fs');
    const data = fs.readFileSync('fila.csv');
    const mod = data.slice(0, -1);
    var linhas = mod.toString().split('\n')
    var pessoas = [];
    for (i = 0; i < linhas.length; i++) {
            if (linhas[i] !=" ") {
            var temp = linhas[i].toString().split(',');
            pessoas.push(temp[0]);
        }
    }
    conteudo = '```ml\n[FILA DE INICIATIVA]\n\n'
    for (i = 0; i < pessoas.length; i++) {
        conteudo = conteudo + "[" + pessoas[i] + "]\n"
    }
    conteudo = conteudo + "```";
    return conteudo
}
module.exports=fila