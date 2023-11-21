const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let score = 0;
let gameTime  = 10000;
let timeUp = false;

function moleRandomTime(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomMole(holes){
    return Math.floor(Math.random() * holes.length);
}

function peek(){
    const time = moleRandomTime(100, 1000);
    const moleIndex = getRandomMole(holes);
    holes[moleIndex].classList.add('up');
    setTimeout(() => {
        holes[moleIndex].classList.remove('up');
        if(!timeUp) peek();
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    peek();
    setTimeout(() => {
        timeUp = true;
    }, gameTime);
}

function clickMole(e){
    if(!e.isTrusted) return;
    score++;
    scoreBoard.textContent = score;
    this.classList.remove('up');
}
moles.forEach(mole => mole.addEventListener('click', clickMole))