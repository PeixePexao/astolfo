function status() {
    const fs = require('fs');
    const data = fs.readFileSync('fila.csv');
    var linhas = data.toString().split('\n');
    var conteudo = "```ml\n[STATUS]\n\n"
    for (i = 0; i < linhas.length; i++) {
        var nomes = linhas[i].toString().split(',');
        if (fs.existsSync(`${nomes[0]}.json`)) {
            const datasub = fs.readFileSync(`${nomes[0]}.json`)
            var personagem = JSON.parse(datasub);
            conteudo = conteudo + nomes[0] + ": " + (personagem.hp + personagem.hptemp);
            if (personagem.hptemp != 0) {
                conteudo = conteudo + " (" + personagem.hp + " normais, " + personagem.hptemp + " temporários)\n"
            }
            else {
                conteudo = conteudo + "\n"
            }
        }
    }
    conteudo = conteudo + "```";
    return conteudo
}

module.exports=status