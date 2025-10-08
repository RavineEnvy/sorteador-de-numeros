function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let listaDeSorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = sortearNumero(de, ate);

        while(listaDeSorteados.includes(numero)){
            numero = sortearNumero(de, ate);
        }

        listaDeSorteados.push(numero);

    }
    alterarStatusBotao("btn-reiniciar");
    alterarStatusBotao("btn-sortear");

    let pluralSorteados = quantidade > 1 ? "Os números sorteados foram" : "O número sorteado foi";

    exibirTextoNaTela("resultado", `<label class="texto__paragrafo">${pluralSorteados}:   ${listaDeSorteados}</label>`);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function sortearNumero(min, max){
    return parseInt(Math.random() * (max - min) + min);
}

function alterarStatusBotao(idBotao){
    let botao = document.getElementById(idBotao);

    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.add("container__botao-desabilitado");
        botao.classList.remove("container__botao");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    exibirTextoNaTela("resultado", `<label class="texto__paragrafo">Escolha algum número para sortear! 😎</label>`);
    alterarStatusBotao("btn-reiniciar");
    alterarStatusBotao("btn-sortear");

}