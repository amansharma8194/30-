const navEl = document.querySelector('#main')
function updateNav(){
    if(scrollY >= navEl.offsetTop){
        document.body.classList.add('fixed-nav')
    }
    else{
        document.body.classList.remove('fixed-nav')
    }
}
window.addEventListener('scroll', updateNav)