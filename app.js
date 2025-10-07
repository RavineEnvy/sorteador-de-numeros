function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let frasePlural = quantidade > 1 ? `<label class="texto__paragrafo">Números sorteados:  Os números sorteados foram ${sorteados}.</label>` : `<label class="texto__paragrafo">Números sorteados:  O número sorteado foi ${sorteados}.</label>`

    exibirTexto("resultado", frasePlural );

    alterarStatusBotao("btn-reiniciar");
    alterarStatusBotao("btn-sortear");

}

function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);

}

function exibirTexto(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function reiniciar(){
     exibirTexto("resultado",`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>` );
     sorteados = [];
     apagarCampo(quantidade);
     apagarCampo(de)
     apagarCampo(ate);
     alterarStatusBotao("btn-sortear");
     alterarStatusBotao("btn-reiniciar");

}

function alterarStatusBotao(idBotao){
    let botao = document.getElementById(idBotao);
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }

}

function apagarCampo(numeroDigitado){
    numeroDigitado.value = "";

}
