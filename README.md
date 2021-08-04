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
    5. Para rolar a iniciativa basta digitar -iniciativa. O bot então rolará um dado para cada pessoa na fila, levando em contra bonus e efeitos
    6. O comando de status leva em conta quem está na fila de iniciativa.
    7. O comando recuperar regenera TODOS os slots de magia do indivíduo.

    

    Templates de comando:
    -criarper NOME VIDA SL1 SL2 SL3 SL4 SL5 SL6 SL7 SL8 SL9. Onde SL representa o número de usos de um determinado nível de magia. Por exemplo, o SL1 de um mago nível 10 é 4.
    -addfila NOME BONUS EFEITO, onde efeito pode ser um de tres valores: N (para nenhum), D (para desvantagem) e V (para vantagem).
    -remfila NOME
    -recuperar NOME
    -castar NOME SLOT
    -dano NOME PONTOS
    -cura NOME PONTOS
    -fila
    -status