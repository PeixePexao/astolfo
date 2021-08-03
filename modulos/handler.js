function buro(mensagem) {
    mensagem = mensagem.substring(1); //Remove o prefixo
    var comando = mensagem.split(" ");
    return comando;
}
module.exports= buro;