const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)
function onSpeak(e){
   chute = e.results[0][0].transcript
   
   exiteChuteNaTela(chute)
   verificaSeOChutePossuiUmValorValido(chute)
    
}
function exiteChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div> Você disse</div>
    <span class = "box">${chute}</span>`
}