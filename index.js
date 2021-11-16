
(function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'black';

    let canvas = document.getElementById('canvas');
    let brushColor = 'black';
    let isDrawing = false;

    const quitStroke = () => {
        isDrawing = false;
    };

    for(let i = 0; i < 555; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.appendChild(pixel);
    }

    canvas.addEventListener('mousedown', () => {
        isDrawing = true;
    })

    canvas.addEventListener('mouseenter', (event) => {
        if (event.target === canvas || isDrawing !== true) {
            return;
        }

        event.target.style.backgroundColor = brushColor;
    })

    canvas.addEventListener('mouseup', quitStroke);
    canvas.addEventListener('mouseleave', quitStroke);

    let palette = document.getElementById('palette');

    let colors = [
        'white', 'black','beige', 'palevioletred',
        'indianred', 'coral', 'khaki', 'saddlebrown',
        'mediumspringgreen', 'darkcyan', 'royalblue',
        'rebeccapurple', 'darkslategrey', 
    ];

    for(const color of colors) {
        let swatch = document.createElement('div');
        swatch.className = 'swatch';
        swatch.classList.add(color);
        swatch.style.backgroundColor = color;
        palette.appendChild(swatch);
    }

    palette.addEventListener('click', (event) => {
        if (event.target === palette) { return; }
        brushColor = event.target.classList[1];
    })
})();

