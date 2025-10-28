'use strict';

const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];

const list = document.querySelector('.list');

const markup = playList.map(item => `<li class='list_item'><span class='accent'>${item.author}.</span> ${item.song}</li>`)
  .join("");

list.innerHTML = markup;

const btnOpen = document.querySelector('.button_open');
const btnClose = document.querySelector('.button_close')
const modal = document.querySelector('.modal')
btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal)

function openModal() {
    modal.classList.add('is_open')
    btnOpen.setAttribute('disabled', true)
    btnOpen.classList.add('disabled')
}

function closeModal() {
    modal.classList.remove('is_open')
    btnOpen.removeAttribute('disabled')
    btnOpen.classList.remove('disabled')
}

const light = document.querySelector('.light');
const btnChange = document.querySelector('.button_change');

btnChange.addEventListener('click', changeColor);

function changeColor() {
    switch (light.style.backgroundColor) {
        case 'red':
            light.style.backgroundColor = 'yellow'
            break;
        case 'yellow':
            light.style.backgroundColor = 'green'
            break;
        case 'green':
            light.style.backgroundColor = 'red'
            break;
        default:
            break;
    }
}

