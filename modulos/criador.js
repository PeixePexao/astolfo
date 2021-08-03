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
        var cont = `{\n  "name":"${nome}",\n  "hp":"${hp}",\n}`;

        fs.writeFile(`${nome}.json`, cont, function(err) {
            if (err) throw err;
            console.log("SALVO!;")
        })
        return true;
    }
}

module.exports=criarPer