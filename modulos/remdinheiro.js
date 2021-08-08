function remdinheiro(comando) {
    const fs = require('fs');
    const nome = comando[1]
    var quant = parseInt(comando[2])
    const tipo = comando[3]
    const tipos = ["pc", "pp", "pe", "po", "pl"];
    if (fs.existsSync(`${nome}.json`) && !isNaN(quant) && tipos.includes(tipo)) {
        const data = fs.readFileSync(`${nome}.json`)
        var pessoa = JSON.parse(data);
        
        switch(tipo) {
            case "po":
                pessoa.po = pessoa.po - quant
                if (pessoa.po < 0) { 

                    while(pessoa.po < 0) {
                        pessoa.po = pessoa.po + 10
                        pessoa.pl = pessoa.pl - 1
                    }
                }
                break;
            case "pp":
                pessoa.pp = pessoa.pp - quant
                if (pessoa.pp < 0) { 

                    while(pessoa.pp < 0) {
                        pessoa.pp = pessoa.pp + 10
                        pessoa.po = pessoa.po - 1
                    }
                }
                break;
            case "pe": 
                pessoa.pe = pessoa.pe - quant
                if (pessoa.pe < 0) { 

                    while(pessoa.pe < 0) {
                        pessoa.pe = pessoa.pe + 2
                        pessoa.po = pessoa.po -1
                    }
                }
                break;
            case "pc":
                pessoa.pc = pessoa.pc - quant
                if (pessoa.pc < 0) { 

                    while(pessoa.pc < 0) {
                        pessoa.pc = pessoa.pc + 10
                        pessoa.pp = pessoa.pp - 1
                    }
                }
                break;
        }
        if (pessoa.po < 0) { 

            while(pessoa.po < 0) {
                pessoa.po = pessoa.po + 10
                pessoa.pl = pessoa.pl - 1
            }
        }
        if (pessoa.pp < 0) { 

            while(pessoa.pp < 0) {
                pessoa.pp = pessoa.pp + 10
                pessoa.po = pessoa.po - 1
            }
        }
        if (pessoa.pe < 0) { 

            while(pessoa.pe < 0) {
                pessoa.pe = pessoa.pe + 2
                pessoa.po = pessoa.po -1
            }
        }
        if (pessoa.pc < 0) { 

            while(pessoa.pc < 0) {
                pessoa.pc = pessoa.pc + 10
                pessoa.pp = pessoa.pp - 1
            }
        }
        
        const escrita = JSON.stringify(pessoa, null, 4)
        fs.writeFileSync(`${nome}.json`, escrita);
        return true;
    }
    else {return false} 
}

module.exports=remdinheiro