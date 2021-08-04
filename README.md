//MANUAL DE INSTRUÇÕES

    Esse é um bot para mesas de RPG. Ele automatiza os seguintes processos:

    Iniciativa;
    Manutenção dos slots de magia;
    Manutenção da vida dos jogadores

    Observações:

    1. Primeiro deve-se usar o comando "-criarper" para registrar um personagem no bot. O comando deve seguir o formato posteriormente mencionado.
    2. Caso se deseje fazer mudanças em um personagem já criado, pode ser utilizado o "-criarper" com os valores upados.
    3. Para a iniciativa, primeiro deve-se adicionar cada um dos personagens da batalha à fila de iniciativa, com o comando -addfila
    4. Caso alguém saia de combate, pode-se removê-lo com o comando -remfila

    Templates de comando:
    -criarper NOME VIDA SL1 SL2 SL3 SL4 SL5 SL6 SL7 SL8 SL9. Onde SL representa o número de usos de um determinado nível de magia. Por exemplo, o SL1 de um mago nível 10 é 4.
    -addfila NOME BONUS EFEITO, onde efeito pode ser um de tres valores: N (para nenhum), D (para desvantagem) e V (para vantagem).
    -remfila NOME
    