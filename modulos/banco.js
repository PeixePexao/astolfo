function banco() {
    const fs = require('fs');
    const data = fs.readFileSync('fila.csv');
    var linhas = data.toString().split('\n');
    var conteudo = "```ml\n[BANCO]\n\n"
    var total_pc = 0
    var total_pp = 0
    var total_po = 0
    var total_pe = 0
    var total_pl = 0
    for (i = 0; i < linhas.length; i++) {
        var nomes = linhas[i].toString().split(',');
        if (fs.existsSync(`${nomes[0]}.json`)) {
            const datasub = fs.readFileSync(`${nomes[0]}.json`)
            var personagem = JSON.parse(datasub);
            conteudo = conteudo + `--${personagem.name}--\n`;
            
            conteudo = conteudo + "PC: " + personagem.pc + "\n"
            total_pc += personagem.pc
            conteudo = conteudo + "PP: " + personagem.pp + "\n"
            total_pp += personagem.pp
            conteudo = conteudo + "PE: " + personagem.pe + "\n"
            total_pe += personagem.pe
            conteudo = conteudo + "PO: " + personagem.po + "\n"
            total_po += personagem.po
            conteudo = conteudo + "PL: " + personagem.pl + "\n\n"
            total_pl += personagem.pl
        }
    }
    conteudo = conteudo + `--TOTAL--\n`
    conteudo = conteudo + "PC: " + total_pc + "\n"
    conteudo = conteudo + "PP: " + total_pp + "\n"
    conteudo = conteudo + "PE: " + total_pe + "\n"
    conteudo = conteudo + "PO: " + total_po + "\n"
    conteudo = conteudo + "PL: " + total_pl + "\n```"
    return conteudo;

}
module.exports=banco