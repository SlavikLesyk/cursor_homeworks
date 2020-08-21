const REQUEST_URL = 'https://swapi.dev/api/';

const sendRequest = (url) => {
    return fetch(url).then(res => res.json())
}

const generateFilmURL = (num) => `${REQUEST_URL}films/${num}`;

const getCharactersInfo = (url) =>{

    return sendRequest(url)
        .then(res => res.characters.map(sendRequest))
        .then(res => Promise.all(res))
        .then(res => res.map(elem => {
            return {
                name: elem.name,
                birthYear: elem.birth_year,
                gender: elem.gender,
            }
        }))
        .then (res => console.log(res))
}

const getAllPlanets = (url) =>{
    return sendRequest(url)
    .then (res => sendRequest(res.planets))
    .then(console.log)
}

getCharactersInfo(generateFilmURL(1))
getAllPlanets(REQUEST_URL)

////////// Events

const mainPanel = document.querySelector('.panel-main');
mainPanel.addEventListener('click', function(e){
    if(e.target.className === 'panel-main__btn'){
        const buttons = mainPanel.querySelectorAll('panel-main__btn');
        removeClass(...buttons,'active');           
        e.target.classList.add('active');
    }
});

const removeClass = (arr, className) => arr.map(elem => {
    if(elem.classList.has(className)){
        elem.classList.remove(className)
    }
    return elem
});
