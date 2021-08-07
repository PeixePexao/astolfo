function addtemp(comando) {
    var nome = comando[1];
    valor = comando[2]
    const fs = require('fs');
    if (fs.existsSync(`${nome}.json`) && !isNaN(parseInt(valor))) {
        const data = fs.readFileSync(`${nome}.json`)
        var pessoa = JSON.parse(data);
        pessoa.hptemp = pessoa.hptemp + parseInt(valor);
        fs.writeFileSync(`${nome}.json`, JSON.stringify(pessoa, 4, null));
        return true;
    }
    else {
        return false;
    }
}
function remtemp(comando) {
    var nome = comando[1];
    valor = comando[2]
    const fs = require('fs');
    if (fs.existsSync(`${nome}.json`) && !isNaN(parseInt(valor))) {
        const data = fs.readFileSync(`${nome}.json`)
        var pessoa = JSON.parse(data);
        pessoa.hptemp = pessoa.hptemp - parseInt(valor);
        fs.writeFileSync(`${nome}.json`, JSON.stringify(pessoa, 4, null));
        return true;
    }
    else {
        return false;
    }
}

module.exports= {addtemp, remtemp}