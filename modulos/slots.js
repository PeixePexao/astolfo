function slots(comando, id) {
    const fs = require('fs');
    if(fs.existsSync(`./${id}/${comando[1]}.json`)) {
        const data = fs.readFileSync(`./${id}/${comando[1]}.json`)
        var pessoa = JSON.parse(data);
        var conteudo = "```ml\nSLOTS DE MAGIA DE " +pessoa.name + "\n\n"
        for (i = 0; i < 9; i++) {
            if (pessoa[`magias${i+1}base`] != 0) {
                conteudo = conteudo + `LVL ${i+1}: ${pessoa[`magias${i+1}`]} (de ${pessoa[`magias${i+1}base`]} no total)\n`
            }
        }
        conteudo = conteudo + '```'
        return conteudo;
    }
    else {return "errado"}

}
module.exports=slots