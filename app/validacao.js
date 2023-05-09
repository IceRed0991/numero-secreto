function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;
    if(ChuraForInvalido(numero)){
       elementoChute.innerHTML+= '<div>valor inválido</div>';
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
       elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto) {
    document.body.innerHTML=`
    <h2> Você acerto!</h2>
    <h3> O número secreto era ${numeroSecreto}</h3>

    `}
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero>maiorValor || numero<menorValor;
}

function ChuraForInvalido(numero) {
    return Number.isNaN(numero);
}
