function recuperar(comando, id) {
    const fs = require('fs');
    if(fs.existsSync(`./${id}/${comando[1]}.json`)) {
        const data = fs.readFileSync(`./${id}/${comando[1]}.json`);
        personagem = JSON.parse(data);

        for (i = 0; i < 9; i++) {
            personagem[`magias${i+1}`] = personagem[`magias${i+1}base`]
        }
        conteudo = JSON.stringify(personagem, null, 4);
        fs.writeFileSync(`./${id}/${comando[1]}.json`, conteudo);
        return true;
    }
    else {return false}
}

module.exports=recuperar