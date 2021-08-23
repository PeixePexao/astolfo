function addFila(comando, id) {
    const fs = require('fs');
    if(!isNaN(parseInt(comando[2])) && ["N", "D", "V"].includes(comando[3])) {
        var escrita = comando[1] + "," + comando[2] + "," + comando[3] + "\n";
        fs.appendFileSync(`./${id}/fila.csv`, escrita)
        return true;
    }
    else {
        return false;
    }
}

module.exports=addFila