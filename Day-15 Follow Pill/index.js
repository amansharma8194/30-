const links = document.querySelectorAll('a');
const pill = document.createElement('span');
pill.classList.add('pill');
document.body.append(pill);
function addPill(){
    const linkCoords= this.getBoundingClientRect()
    pill.style.height = `${linkCoords.height}px`;
    pill.style.width = `${linkCoords.width}px`;
    const coords = {
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }
    pill.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
links.forEach(link => link.addEventListener('mouseenter', addPill))
