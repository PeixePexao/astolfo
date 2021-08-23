function addinheiro(comando, id) {
    const fs = require('fs');
    const nome = comando[1];
    const valor = parseInt(comando[2])
    const tipo = comando[3]
    const tipos = ["pc", "pp", "pe", "po", "pl"];
    if (fs.existsSync(`./${id}/${nome}.json`) && !isNaN(valor) && tipos.includes(tipo)) {
        const data = fs.readFileSync(`${nome}.json`);
        var pessoa = JSON.parse(data);
        var totalprevio = parseInt(pessoa[tipo]);
        totalprevio += valor;
        
        pessoa[`${tipo}`] = totalprevio;
        var valoress = []
        for (i = 0; i < tipos.length; i++) {
            valoress.push(pessoa[`${tipos[i]}`]);

        }
        if (valoress[0] > 10) {
            valoress[1] += Math.floor(valoress[0] / 10)
            valoress[0] = valoress[0] - (10 * Math.floor(valoress[0] / 10))
        }
        if (valoress[1] > 10) {
            valoress[3] += Math.floor(valoress[1] / 10)
            valoress[1] = valoress[1] - (10 * Math.floor(valoress[1] / 10))
            
            console.log(Math.floor(valoress[3]))
        }
        if (valoress[2] > 2) {
            valoress[3] += Math.floor(valoress[2] / 2)
            valoress[2] = valoress[2] - (2 * Math.floor(valoress[2] / 2))
        }
        for (i = 0; i < tipos.length; i++) {
            var address = tipos[i]
            pessoa[`${address}`] = valoress[i]

        }
        var conteudo = JSON.stringify(pessoa, null, 4)
        fs.writeFileSync(`./${id}/${nome}.json`, conteudo);
        return true

    }
    else {
        return false
    }
}

function arranjar(valor, barreira) {
    console.log(Math.floor(valor / barreira))
    return Math.floor(valor / barreira)
}

module.exports=addinheiro
