let intervalFunction = null;
const cube = document.getElementById('cube');

const renderCube = (rows, cells) => {
    const cubeCells = new Array(cells)
        .fill(null)
        .map(() => '<div class="cube__cell"></div>')
        .join('');

    const cubeRows = new Array(rows)
        .fill(null)
        .map(() =>  `<div class="cube__row"> ${cubeCells} </div>`)
        .join('');

    return cubeRows
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomColor = () => `rgb(${
    new Array(3)
    .fill(null)
    .map(() => getRandomNumber(0, 255))
})`;

const paintCells = () => {
    const cubeCells = document.getElementsByClassName('cube__cell');
    [...cubeCells].map(cell => cell.style.background = getRandomColor());
};

const generateBlocks = () => {
    clearInterval(intervalFunction);
    cube.innerHTML = renderCube(5,5);
    paintCells();
};

const generateBlocksInterval = () => {
    generateBlocks();
    intervalFunction = setInterval(paintCells, 1000);
};

