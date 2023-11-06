const keyCode = 'berserk';
const pressed = [];
window.addEventListener('keyup', (e)=>{
    pressed.push(e.key);
    pressed.splice(-keyCode.length-1, pressed.length - keyCode.length);
    console.log(pressed);
    if(pressed.join('').includes(keyCode)) cornify_add();
})