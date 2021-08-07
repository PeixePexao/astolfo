var fs = require('fs')
function checkFile(nomeChar) {
    if(fs.existsSync(`${nomeChar}.json`)) {
        return true
    }
    else {
        return false
    }
}

function dano(comando) {
    var nome = comando[1];
    if(!checkFile(nome) || isNaN(parseInt(comando[2]))) {
        return false
    }
    else {
        danoTotal = parseInt(comando[2]);
        const data = fs.readFileSync(`${nome}.json`);
        valores = JSON.parse(data);
        valores.hp = valores.hp - danoTotal;
        fs.writeFileSync(`${nome}.json`, JSON.stringify(valores, null, 4));
        return true
    }
}
function cura(comando) {
    var nome = comando[1];
    if(!checkFile(nome) || isNaN(parseInt(comando[2]))) {
        return false
    }
    else {
        curaTotal = parseInt(comando[2]);
        const data = fs.readFileSync(`${nome}.json`);
        valores = JSON.parse(data);
        valores.hp = valores.hp + curaTotal;
        if (valores.hp > valores.hpbase) {
            valores.hp = valores.hpbase;
        }
        fs.writeFileSync(`${nome}.json`, JSON.stringify(valores, null, 4));
        return true
    }
}

module.exports= {
    dano,
    cura
}