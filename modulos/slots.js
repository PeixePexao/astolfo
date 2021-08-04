function slots(comando) {
    const fs = require('fs');
    if(fs.existsSync(`${comando[1]}.json`)) {
        const data = fs.readFileSync(`${comando[1]}.json`)
        var pessoa = JSON.parse(data);
        var conteudo = "```ml\nSLOTS DE MAGIA DE " +pessoa.name + "\n\n"
        for (i = 0; i < 9; i++) {
            if (pessoa[`magias${i+1}base`] != 0) {
                conteudo = conteudo + `LVL ${i+1}: ${pessoa[`magias${i+1}`]} (de ${pessoa[`magias${i+1}`]} no total)\n`
            }
        }
        conteudo = conteudo + '```'
        return conteudo;
    }
    else {return "errado"}

}
module.exports=slots