function castar(comando, id) {
    const fs = require('fs');
    if (fs.existsSync(`./${id}/${comando[1]}.json`) && isNaN(parseInt(comando[2])) == false) {
        const data = fs.readFileSync(`/${id}/${comando[1]}.json`)
        var pessoa = JSON.parse(data);
        if(pessoa[`magias${comando[2]}`] != 0) {
            pessoa[`magias${comando[2]}`] = pessoa[`magias${comando[2]}`] - 1
            const conteudo = JSON.stringify(pessoa, null, 4)
            fs.writeFileSync(`./${id}/${comando[1]}.json`, conteudo)
            return "sucesso"
        }
        else {
            return "erroSM"
        }
    }
    else {
        return "erroNE"
    }
}

module.exports=castar