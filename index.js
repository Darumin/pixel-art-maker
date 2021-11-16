
let body = document.querySelector('body');
console.log(body);
body.style.backgroundColor = 'black';
let canvas = document.getElementById('canvas');
let brushColor = 'black';
let isDrawing = false;

for(let i = 0; i < 555; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'nice';
    canvas.appendChild(pixel);
}

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
})

canvas.addEventListener('mousemove', (event) => {
    if (event.target === canvas || isDrawing !== true) {
        return;
    }

    event.target.classList[1] = null;
    event.target.classList.add(brushColor);
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
})

let palette = document.getElementById('palette');
let swatch = document.createElement('div');
swatch.className = 'swatch';
swatch.classList.add('red');

palette.appendChild(swatch);

palette.addEventListener('click', (event) => {
    if (event.target === palette) {
        return;
    }

    brushColor = event.target.classList[1];
})
