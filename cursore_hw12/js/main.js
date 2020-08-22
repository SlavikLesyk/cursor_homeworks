const BASE = 'https://swapi.dev/api/';

const content = document.getElementById('content')
const currentFilm = document.getElementById('current-film');
const planetsBtn = document.getElementById('planets-btn');
const charactersBtn = document.getElementById('characters-btn');
const filmBtn = document.getElementById('film-btn');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-previous');

////////// REQUEST
const toHTTPS = (url) => (url[4].toLowerCase() === 's') ? url : url.slice(0,4) + 's' + url.slice(4);

const sendRequest = (url) => {
    const newURL = toHTTPS(url);
    return fetch(newURL)
    .then(res => res.json())
    .catch(console.log)
}

const generateFilmURL = (num) => `${BASE}films/${num}`;

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
}

const generatePlanetsURL = (page = 1) => `${BASE}planets/?page=${page}`;

const getPlanetsObj = (url) =>{
    if(url){
        return sendRequest(url)
        .then(res => {
            return{
            next: res.next,
            prev: res.previous,
            planets: res.results.map(elem => elem.name)
            }
        })           
        .catch(err => {
            console.log(err)
            return []
        })
    }
}

////////// RENDER
const renderCharacthers = (arr) =>{
    content.innerHTML = `
    <div class = "content-wrap">
        <h2 class = "heading-secondary">
            <span class = "secondary-heading__top">${currentFilm.innerText}</span>
            <span class="heading-secondary__bottom">Characters:</span>
        </h2>
        <ul class="characters__list">
            ${arr.map(elem => `
            <li class="characters__item">
                <span class="characters__name">Name: ${elem.name}</span>
                <span class="charaters__birth">Birth Yeae: ${elem.birthYear}</span>
                <span class="characters__gender">Gender: ${elem.gender}</span>                            
            </li>`        
            ).join('\n')}
        
        </ul>
    </div">
    `
}

const renderPlanets = (arr,num) =>{
    content.innerHTML = `
    <div class = "content-wrap">
        <h2 class = "heading-secondary">
            <span class="heading-secondary__bottom">Planets: page ${num}</span>
        </h2>
        <ul class="planets__list">
        ${arr.map(elem => `
        <li class="planets__item">
            Planet: ${elem}                          
        </li>`        
    ).join('\n')}
    </ul>
    </div">
    `
}


////////// Events
const removeSecondaryPanel = () => {
    document.querySelector('.characters-panel').classList.remove('visible');
    document.querySelector('.planets-panel').classList.remove('visible');
};

currentFilm.addEventListener('click', function(e){ 
    const filmsList =  document.querySelector('.films__list');
    
    filmsList.classList.toggle('visible');

    function chooseFilm(e){
        if(e.target.hasAttribute('data-film-id')){
            
            currentFilm.setAttribute('data-film-id',e.target.getAttribute('data-film-id'));
            currentFilm.innerHTML = e.target.innerText;
            filmsList.classList.remove('visible');
        }
    }        
    
    function closeList(e){
        if(!e.target.hasAttribute('data-film-id')){
            filmsList.classList.remove('visible');
            document.removeEventListener('click', closeList);
        }
    }

    filmsList.addEventListener('click', chooseFilm)
    document.addEventListener('click', closeList);

});

charactersBtn.addEventListener('click', function(){
    removeSecondaryPanel()        
    document.querySelector('.characters-panel').classList.toggle('visible');
});


planetsBtn.addEventListener('click', function(){        
    removeSecondaryPanel();
    document.querySelector('.planets-panel').classList.add('visible');
});

filmBtn.addEventListener('click', function(){
    getCharactersInfo(generateFilmURL(currentFilm.getAttribute('data-film-id')))
    .then(renderCharacthers);
})

planetsBtn.addEventListener('click', function(){        
    getPlanetsObj(generatePlanetsURL())
        .then(res => renderPlanets(res.planets, 1));
    });

function addEventsToPageButton(){
    let currentPage = 1;
    let lastPage = null;

    btnNext.addEventListener('click', function(){
        if(currentPage === lastPage){
            return
        } else{
            const obj = getPlanetsObj(generatePlanetsURL(++currentPage));
        
            obj.then(res => renderPlanets(res.planets, currentPage));    
            obj.then(res => {
                if(!res.next){
                    lastPage = currentPage;
                } 
            });
        }
    })

    btnPrev.addEventListener('click', function(){
    if(currentPage === 1){
        return
    } else {
        getPlanetsObj(generatePlanetsURL(--currentPage))
            .then(res => renderPlanets(res.planets, currentPage))
    }
    })
}

addEventsToPageButton()




