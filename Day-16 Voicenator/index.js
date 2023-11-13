const dropDown = document.querySelector('#dropdown');
const options = document.querySelectorAll('[type=range], [name=text]');
const speakBtn = document.querySelector('.speakBtn');
const stopBtn = document.querySelector('.stopBtn');
let voices = [];
const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name=text]').value;

function populateVoices(){
    voices = this.getVoices();
    dropDown.innerHTML = voices.map(voice => {
        return `<option value="${voice.name}">${voice.name}</option>`
    }).join('');
}
function changeVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    play()
}
function play(resume = false){
    if(!resume) speechSynthesis.cancel();
    speechSynthesis.speak(msg);
}
function setOption(){
    msg[this.name] = this.value;
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);
dropDown.addEventListener('change', changeVoice)
speakBtn.addEventListener('click', play);
stopBtn.addEventListener('click', ()=> { speechSynthesis.cancel()})
options.forEach(option => option.addEventListener('change', setOption))