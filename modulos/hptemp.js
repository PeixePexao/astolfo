function addtemp(comando, id) {
    var nome = comando[1];
    valor = comando[2]
    const fs = require('fs');
    if (fs.existsSync(`./${id}/${nome}.json`) && !isNaN(parseInt(valor))) {
        const data = fs.readFileSync(`./${id}/${nome}.json`)
        var pessoa = JSON.parse(data);
        pessoa.hptemp = pessoa.hptemp + parseInt(valor);
        fs.writeFileSync(`./${id}/${nome}.json`, JSON.stringify(pessoa, null, 4));
        return true;
    }
    else {
        return false;
    }
}
function remtemp(comando, id) {
    var nome = comando[1];
    valor = comando[2]
    const fs = require('fs');
    if (fs.existsSync(`./${id}/${nome}.json`) && !isNaN(parseInt(valor))) {
        const data = fs.readFileSync(`./${id}/${nome}.json`)
        var pessoa = JSON.parse(data);
        pessoa.hptemp = pessoa.hptemp - parseInt(valor);
        fs.writeFileSync(`./${id}/${nome}.json`, JSON.stringify(pessoa, null, 4));
        return true;
    }
    else {
        return false;
    }
}

module.exports= {addtemp, remtemp}