const videoEl = document.querySelector('.video');
const canvasEl = document.querySelector('.canvasEl');
const ctx = canvasEl.getContext('2d');
const clickPicBtn = document.querySelector('.click-btn');
const ulEl = document.querySelector('.img-list');
const clearBtn = document.querySelector('.clear-btn');
const redEffectBtn = document.querySelector('.red-Effect');
const coolEffectBtn = document.querySelector('.cool-Effect');
const bwEffectBtn = document.querySelector('.bw-Effect');
const splitEffectBtn = document.querySelector('.split-Effect');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            videoEl.srcObject = localMediaStream;
            videoEl.play();
        })
}
function playCanvas(){
    const height = videoEl.videoHeight;
    const width = videoEl.videoWidth;
    canvasEl.height = height;
    canvasEl.width = width;
    setInterval(()=>{
        ctx.drawImage(videoEl, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        if(redEffectBtn.classList.contains('active')){
            for(let i=0;i<pixels.data.length;i+=4){
                pixels.data[i+0] += 30;
                // pixels.data[i+1] += 20;
                // pixels.data[i+2] += 20;
            }
        }
        if(coolEffectBtn.classList.contains('active')){
            for(let i=0;i<pixels.data.length;i+=4){
                pixels.data[i+0] -= 50;
                pixels.data[i+1] += 20;
                pixels.data[i+2] += 20;
            }
        }
        if(bwEffectBtn.classList.contains('active')){
            for(let i=0;i<pixels.data.length;i+=4){
                let r = pixels.data[i];
                let g = pixels.data[i + 1];
                let b = pixels.data[i + 2];
                let brightness = (3 * r + 4 * g + b) >>> 3;
                pixels.data[i] = brightness;
                pixels.data[i + 1] = brightness;
                pixels.data[i + 2] = brightness;
            }
        }
        if(splitEffectBtn.classList.contains('active')){
                for(let i=0;i<pixels.data.length;i+=4){
                    pixels.data[i + 150] = pixels.data[i+0]; 
                    pixels.data[i - 100] = pixels.data[i+1]; 
                    pixels.data[i + 150] = pixels.data[i+2]; 
            }
        }
        ctx.putImageData(pixels, 0, 0);
    }, 32);
}
function clickPic(){
    const imgData = canvasEl.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = imgData;
    link.setAttribute('download', 'pic');
    link.innerHTML = `<img src=${imgData} alt="Click Image to Download"/>`
    ulEl.insertBefore(link, ulEl.firstChild);
}
function clearPic(){
    ulEl.innerHTML = '';
}

getVideo();

videoEl.addEventListener('canplay', playCanvas);
clickPicBtn.addEventListener('click', clickPic);
clearBtn.addEventListener('click', clearPic);
redEffectBtn.addEventListener('click', ()=> { redEffectBtn.classList.toggle('active') });
coolEffectBtn.addEventListener('click', ()=> { coolEffectBtn.classList.toggle('active')});
bwEffectBtn.addEventListener('click', ()=> {bwEffectBtn.classList.toggle('active')});
splitEffectBtn.addEventListener('click', ()=> {splitEffectBtn.classList.toggle('active')});