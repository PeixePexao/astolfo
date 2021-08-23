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
function iniciativa(id) {
    const fs = require('fs');
    const data = fs.readFileSync(`./${id}/fila.csv`);
    var linhas = data.toString().split('\n');
    var dados = []
    for (i = 0; i < linhas.length; i++) {
        if (i != (linhas.length - 1)) {
            var igual = true;
            while(igual) {
                var roll = dado(linhas[i]);
                if (!dados.includes(roll)) {
                    dados.push(roll);
                    igual = false;
                }
            }
            
        }
    }
    console.log("DADOS = " + dados);
    console.log("NOMES = " + linhas);
    var conteudo = arrange(dados, linhas);
    return conteudo;
}

function arrange(dados, nomes) {
    var dados_sort = []
    for (i = 0; i < dados.length; i++) {
        dados_sort.push(dados[i]);
    }
    dados_sort.sort(compare);
    var comp = "```ml\n[INICIATIVA]\n\n";
    var nomes_separados = []
    for (i = 0; i < nomes.length; i++) {
        var linha = nomes[i];
        var propies = linha.split(',');
        nomes_separados.push(propies[0])
    }
    for (i = 0; i < dados_sort.length; i++) {
        comp = comp + (i+1) + ". " + nomes_separados[dados.indexOf(dados_sort[i])] + ": " + dados_sort[i] + "\n"
    }
    comp = comp + "```"
    return comp

}

module.exports=iniciativa