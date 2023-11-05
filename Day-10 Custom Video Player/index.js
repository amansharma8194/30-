const player = document.querySelector('.player')
const videoEl  = player.querySelector('.player__video')
const playBtn = player.querySelector('.toggle')
const sliders = player.querySelectorAll('.player__slider')
const skipBtns = player.querySelectorAll('.player__button')
const fullBtn = player.querySelector('.full_btn')
const progressContainer = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
let mouseDownOnProgress = false;

function playVideo(){
    if(videoEl.paused){
        videoEl.play();
        playBtn.textContent = 'O'
    }
    else{
        videoEl.pause();
        playBtn.textContent = '►'
    }
}
function skip(){
    videoEl.currentTime += parseInt(this.dataset.skip)
}
function setRange(){
    videoEl[this.name] = this.value
}
function toggleFullScreen(){
    if(document.fullscreenElement == videoEl) document.exitFullscreen();
    else videoEl.requestFullscreen();
}
function handleProgress(){
    const filled = (videoEl.currentTime/videoEl.duration) * 100
    progressBar.style.flexBasis = `${filled}%`
}
function scrub(e){
    if(!mouseDownOnProgress) return;
    const curTime = (e.offsetX / progressContainer.offsetWidth) * videoEl.duration;
    videoEl.currentTime = curTime;
}

playBtn.addEventListener('click', playVideo)
videoEl.addEventListener('click', playVideo)
videoEl.addEventListener('timeupdate', handleProgress)
skipBtns.forEach(btn => btn.addEventListener('click', skip))
sliders.forEach(slider => slider.addEventListener('input', setRange))
fullBtn.addEventListener('click', toggleFullScreen)
progressContainer.addEventListener('mousedown', ()=> mouseDownOnProgress = true)
progressContainer.addEventListener('mouseup', ()=> mouseDownOnProgress = false)
progressContainer.addEventListener('mouseout', ()=> mouseDownOnProgress=false)
progressContainer.addEventListener('click', (e)=> {
    mouseDownOnProgress = true
    scrub(e)
    mouseDownOnProgress = false
})
progressContainer.addEventListener('mousemove', scrub)