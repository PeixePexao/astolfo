function check(mensagem) {
    var hp = parseInt(mensagem[2])
    if (isNaN(hp)) {
        return false
    }
    else {
        return true
    }
}

function criarPer(mensagem) {
    var passou = check(mensagem);
    if (passou == false) {
        return false;
    }
    else {
        var fs = require('fs');
        var nome = mensagem[1];
        var hp = mensagem[2];
        var cont = `{\n  "name":"${nome}",\n  "hp":"${hp}",\n`;
        for (i = 0; i < 8; i++) {
            cont = cont + `  "magias${i+1}":"${mensagem[i+3]}",\n`
            cont = cont + `  "magias${i+1}base":"${mensagem[i+3]}",\n`
        }
        cont = cont + `  "magias9":"${mensagem[11]}",\n`
        cont = cont + `  "magias9base":"${mensagem[11]}"\n`
        
        cont = cont + "}"

        fs.writeFile(`${nome}.json`, cont, function(err) {
            if (err) throw err;
            console.log("SALVO!");
        })
        return true;
    }
}

module.exports=criarPer