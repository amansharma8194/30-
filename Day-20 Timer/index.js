const timeLeftEl = document.querySelector('.display__time-left');
const endTimeEl = document.querySelector('.display__end-time');
const timerBtnEls = document.querySelectorAll('.timer__button');
const timerForm = document.querySelector('[name=customForm]');
let countDown;

function displayTimeLeft(seconds){
    const hours = Math.floor(seconds / 3600);
    let remSeconds = seconds % 3600;
    const mins = Math.floor(remSeconds / 60);
    remSeconds = remSeconds % 60;
    const showHour = hours>=10 ? "" + hours : "0"+ hours;
    const showMin = mins >=10 ? ""+mins: "0"+mins;
    const showSecs = remSeconds >= 10 ? ""+remSeconds : "0"+remSeconds;
    timeLeftEl.textContent = `${showHour}:${showMin}:${showSecs}`;
}
function displayEndTime(time){
    const endTime = new Date(time);
    const hour = endTime.getHours() > 12 ? endTime.getHours() - 12 : endTime.getHours();
    const mins = endTime.getMinutes()<10?"0"+endTime.getMinutes():endTime.getMinutes();
    const displayHour = hour < 10 ? "0" + hour : hour;
    endTimeEl.textContent = `Be Back at ${displayHour}:${mins}`;
}
function timer(seconds){
    if(countDown) clearInterval(countDown);
    const time = Date.now() + seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(time);
    countDown = setInterval(() => {
        const secondsLeft =  Math.round((time - Date.now())/1000);
        if(secondsLeft < 0){
            endTimeEl.textContent = 'Timer Finished!! Get Back to Work.'
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}
function handleBtnClick(){
    timer(this.dataset.time);
}
function handleFormSubmit(e){
    e.preventDefault();
    const seconds = this.minutes.value * 60;
    this.minutes.value = "";
    timer(seconds);
}
timerBtnEls.forEach(btn => btn.addEventListener('click', handleBtnClick));
timerForm.addEventListener('submit', handleFormSubmit);