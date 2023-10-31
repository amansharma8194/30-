const panels = document.querySelectorAll('.panel');
function activePanel(){
    this.classList.toggle('open')
}
function showText(e){
    if(e.propertyName.includes('flex')) this.classList.toggle('open-active')
}
panels.forEach(panel => panel.addEventListener('click', activePanel))
panels.forEach(panel => panel.addEventListener('transitionend', showText))