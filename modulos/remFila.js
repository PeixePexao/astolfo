function remFila(comando, id) {
    const fs = require('fs');
    data = fs.readFileSync(`./${id}/fila.csv`) 
    linhas = data.toString().split('\n');
    var newLinhas = [];
    var achei = false;
    var pos;
    for (i = 0; i < linhas.length; i++) {
        if (linhas[i].toString().startsWith(comando[1])) {         
            achei = true;
        }
        else {
            newLinhas.push(linhas[i])
        }
    }
    conteudo = newLinhas.join('\n')
    if (achei == true) {
        fs.writeFileSync(`./${id}/fila.csv`, conteudo);
        return true
    }
    else {return false}
}
module.exports=remFila