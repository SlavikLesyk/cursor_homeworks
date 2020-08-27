function* createIdGenerator(){
    for (let i = 1; i < Infinity; i++){
        yield i;
    }
}

const idGenerator = createIdGenerator();

const renderId = () =>{
    document.getElementById('idResult').innerHTML += `
    <p>idGenerator.next().value -> ${idGenerator.next().value}</p>
    `
}

document.getElementById('btnId').addEventListener('click', renderId)

const upOrDown = (size, change) => {
    if (change === 'up'){
        return size += 2 
    } else if(change === "down" && size > 2){
        return size -= 2
    }

    return size    
}

function* newFontGenerator(fontSize = 14){
    let currentFontSize = fontSize;
    while(true){
        currentFontSize = upOrDown(currentFontSize, yield currentFontSize);
    }
}

const fontGenerator = newFontGenerator();

const changeFontSize = (change) => {
    document.querySelector("HTMl").style.fontSize = `${fontGenerator.next(change).value}px`;
}

changeFontSize();

document.getElementById('btnBigger').addEventListener('click', () => changeFontSize('up'))
document.getElementById('btnSmaller').addEventListener('click', () => changeFontSize('down'))