const drums = document.getElementsByClassName('drums');
const drumAudio = document.getElementsByClassName('drums-audio');

const findKeyIndex = (event) => [...drums].findIndex(elem => +elem.getAttribute('data-drums-key') === event.keyCode);        

const findAudioIndex = (attr) => [...drumAudio].findIndex(elem => elem.getAttribute('data-audio-key') === attr);

const findMouseIndex = (event) => {
    let index = null;
    let element = event.target;

    const findDrumsElem = (elem) => {

        if(!elem.hasAttribute('data-drums-key') && elem.className.indexOf('drums-container') === -1){
            findDrumsElem(elem.parentElement)
        } else if(elem.hasAttribute('data-drums-key')){
            element =  elem;
        }else{
            element = null;
        }
    }

    findDrumsElem(element);

    if(element){
        index = [...drums].findIndex(elem => element.getAttribute('data-drums-key') === elem.getAttribute('data-drums-key'));
    }
    
    return index
};

const playSound = (index) =>{
    if(index !== null){
        const indexAudio = findAudioIndex(drums[index].getAttribute('data-drums-key'));
        
        drumAudio[indexAudio].play();
        drums[index].classList.add('tapped');
        setTimeout(() => {drums[index].classList.remove('tapped')}, 400 );
    }

};

window.addEventListener('keydown',function(e){
    if(findKeyIndex(e) !== -1)
        playSound(findKeyIndex(e));
});

document.querySelector('.drums-container')
    .addEventListener('click',function(e){
        if(findMouseIndex(e) !== -1)
            playSound(findMouseIndex(e));
});
