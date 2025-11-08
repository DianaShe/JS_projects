const searchButton = document.querySelector('#btn-search-films');
const filmsBlock = document.querySelector('.films');
const search = document.querySelector('#search');
const type = document.querySelector('#type');

const url = 'http://www.omdbapi.com/';
const API_KEY = '926fb48';

// 'http://www.omdbapi.com/?i=tt3896198&apikey=926fb48' ?apikey=[yourkey]&


function makeUrl(page) {
    console.log(search.value);
    
    return `${url}?s=${search.value}&apikey=${API_KEY}&type=${type.value}&page=${page}`;
}

function makeMarkup(items) {
    return items.map(item => `<li class='list_item'><h3>${item.Title} - ${item.Year}</h3></li><button type="button"data-id=${item.imdbID}>Details</button>`).join('');
}

function makeNextBtn() {
    let btnNext = document.createElement('button');
    btnNext.innerText = "Next";
    filmsBlock.insertAdjacentElement('beforeend', btnNext);
    return btnNext;
}

function getFilms(page) {
    fetch(makeUrl(page)).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.Error);
    }).then((films)=> {
        if (films.Search.length && films.Search.length > 0) {
            let markup = makeMarkup(films.Search);
            filmsBlock.insertAdjacentHTML('beforeend', markup);
            const btnNext = makeNextBtn();
            btnNext.addEventListener('click', () => getFilms(2));
        }
        
    }).catch(error => console.error(error));
    
}

searchButton.addEventListener('click', () => getFilms(1));

function makeUrlDetails(id) {
    return `${url}?i=${id}&apikey=${API_KEY}`;
}

function makeMarkupDetails(obj) {
    return `<p class='text'>${obj.Genre}</p><p class='text'>Director:${obj.Director}</p><p class='text'>Actors:${obj.Actors}</p><p class='text'>${obj.Plot}</p>`
}

function getDetails(id) {
    fetch(makeUrlDetails(id)).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.Error);
    }).then((details) => {
        console.log(details);
        const detailsInfo = makeMarkupDetails(details);
        filmsBlock.insertAdjacentHTML('beforeend', detailsInfo)
    }).catch(error => console.error(error));
}

function showDetails(e) {
    if (e.target.dataset["id"]) {
        getDetails(e.target.dataset["id"])
    }
}
filmsBlock.addEventListener('click', showDetails);
