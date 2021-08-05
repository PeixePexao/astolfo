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
    for (i = 0; i < linhas.length; i++) {
        if (i != (linhas.length - 1)) {
            var roll = dado(linhas[i]);
            dados.push(roll);
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
    var contador = 0;
    var skip = false;
    for (i = 0; i < dados_sort.length; i++) {
        if (dados_sort[contador] != dados_sort[contador+1] && skip == false) {
            comp = comp + (i+1) + ". " + nomes_separados[dados.indexOf(dados_sort[contador])] + ": " + dados_sort[contador] + "\n"
            contador = contador + 1;
        }
        else if (skip == true) {
            skip = false;
            continue;
        }
        else {
            comp = comp + (i+1) + ". " + nomes_separados[dados.indexOf(dados_sort[contador])] + ": " + dados_sort[contador] + "\n"
            comp = comp + (i+2) + ". " +  nomes_separados[dados.indexOf(dados_sort[contador])+1] + ": " + dados_sort[contador] + "\n"
            contador = contador + 2;
            skip = true;
        }
    }
    comp = comp + "```"
    return comp

}

module.exports=iniciativa