const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let initX = 0;
let initY = 0;
let hue = 0;
let direction = false;
ctx.lineWidth = 5;
function draw(e){
    if(!isDrawing) return;
    // console.log(e);
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.moveTo(initX, initY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    initX = e.offsetX;
    initY = e.offsetY;
    hue++;
    if(ctx.lineWidth>=50 || ctx.lineWidth<=5) direction = !direction;
    if(direction) ctx.lineWidth++;
    else ctx.lineWidth--;
}

canvas.addEventListener('mousedown', (e)=> {
    isDrawing=true
    initX = e.offsetX;
    initY = e.offsetY;
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', ()=> isDrawing=false)
canvas.addEventListener('mouseout', ()=> isDrawing=false)