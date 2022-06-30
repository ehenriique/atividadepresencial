var tamanhoPeca= 0;
var nomePeca= "";
var tamanhoCaixa= 0;

    tamanhoPeca = prompt ("Qual o Tamanho da Peça ?");
    if (tamanhoPeca>=100){
        console.log ("Peça com Peso Permitido")
    } else {
        console.log ("Peso Não Permitido")
    }

    nomePeca = prompt("Qual nome da Peça?");
    if (nomePeca.length>=3){
        console.log("Nome Permitido")
    } else{
        console.log ("Nome da Peça Não Permitido")
    }

    tamanhoCaixa= prompt("Qual a Quantidade de Peça na Caixa Atual?");
    if (tamanhoCaixa >= 10){
        console.log ("Capacidade da Caixa Atingida")
    } else{
        console.log("Processo Realizado com Sucesso")
    }