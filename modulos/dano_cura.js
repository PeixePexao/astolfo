var fs = require('fs')
function checkFile(nomeChar, id) {
    if(fs.existsSync(`./${id}/${nomeChar}.json`)) {
        return true
    }
    else {
        return false
    }
}

function dano(comando, id) {
    var nome = comando[1];
    if(!checkFile(nome, id) || isNaN(parseInt(comando[2]))) {
        return false
    }
    else {
        danoTotal = parseInt(comando[2]);
        const data = fs.readFileSync(`./${id}/${nome}.json`);
        valores = JSON.parse(data);
        valores.hp = valores.hp - danoTotal;
        fs.writeFileSync(`./${id}/${nome}.json`, JSON.stringify(valores, null, 4));
        return true
    }
}
function cura(comando, id) {
    var nome = comando[1];
    if(!checkFile(nome, id) || isNaN(parseInt(comando[2]))) {
        return false
    }
    else {
        curaTotal = parseInt(comando[2]);
        const data = fs.readFileSync(`./${id}${nome}.json`);
        valores = JSON.parse(data);
        valores.hp = valores.hp + curaTotal;
        if (valores.hp > valores.hpbase) {
            valores.hp = valores.hpbase;
        }
        fs.writeFileSync(`./${id}/${nome}.json`, JSON.stringify(valores, null, 4));
        return true
    }
}

module.exports= {
    dano,
    cura
}