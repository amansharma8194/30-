const itemCont = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

itemCont.addEventListener('mousedown', (e)=>{
    isDown = true;
    itemCont.classList.add('active');
    startX = e.pageX - itemCont.offsetLeft;
    scrollLeft = itemCont.scrollLeft;
});
itemCont.addEventListener('mouseup', ()=>{
    isDown = false;
    itemCont.classList.remove('active');

});
itemCont.addEventListener('mouseleave', ()=>{
    isDown = false;
    itemCont.classList.remove('active');
});
itemCont.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - itemCont.offsetLeft;
    const walk = (x-startX)*2;
    itemCont.scrollLeft = scrollLeft -  walk;
});