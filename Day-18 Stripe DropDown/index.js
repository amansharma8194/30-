const triggers = document.querySelectorAll('nav > ul > li');
const whiteBg = document.querySelector('.dropdownBackground');
const nav = document.querySelector('nav');
function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(()=> whiteBg.classList.contains('open') && this.classList.add('trigger-enter-active'), 15);
    whiteBg.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    whiteBg.style.setProperty('width', `${coords.width}px`);
    whiteBg.style.setProperty('height', `${coords.height}px`);
    whiteBg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    whiteBg.classList.remove('open');
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
