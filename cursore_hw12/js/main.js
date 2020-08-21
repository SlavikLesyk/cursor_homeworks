const BASE = 'https://swapi.dev/api/';

const content = document.getElementById('content')
const currentFilm = document.getElementById('current-film');
const planetsBtn = document.getElementById('planets-btn');
const charactersBtn = document.getElementById('characters-btn');
const filmBtn = document.getElementById('film-btn');
const btnNext = document.getElementById('btn-next');
const btnPrevious = document.getElementById('btn-previous');

const renderCharacthers = (arr) =>{
    console.log(arr);
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
const renderPlanets = (arr) =>{
    content.innerHTML = `
    <div class = "content-wrap">
        <h2 class = "heading-secondary">
            <span class="heading-secondary__bottom">Planets:</span>
        </h2>
        <ul class="characters__list">
        ${arr.map(elem => `
        <li class="characters__item">
            Planet's Name: ${elem}                          
        </li>`        
    ).join('\n')}
    </ul>
    </div">
    `
}






////////// Request

const sendRequest = (url) => {
    return fetch(url).then(res => res.json())
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

const getPlanetsObj = (baseURL) =>{
    return sendRequest(baseURL + "planets/")
}



////////// Events

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


const removeSecondaryPanel = () => {
    document.querySelector('.characters-panel').classList.remove('visible');
    document.querySelector('.planets-panel').classList.remove('visible');
};

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
    const promise = getPlanetsObj(BASE);

    promise
    .then(res => res.results.map(elem => elem.name))
    .then(renderPlanets);
    promise.then(res => btnNext.addEventListener('click', function(){
        sendRequest(res.next)
        .then(console.log)
    })
        )
    })
;





console.log(getCharactersInfo(generateFilmURL(currentFilm.getAttribute('data-film-id'))))

