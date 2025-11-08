let btnAddPost = document.querySelector('#btn-add-post');
let blockForPosts = document.querySelector('#posts');
let amountPost = document.querySelector('#amount_post');

const urlPosts = new URL('https://jsonplaceholder.typicode.com/posts');

let getAmountPosts = function () {
    let amountPostsVal = amountPost.value;
    let urlPostsLimit = new URL(`?&_limit=${amountPostsVal}`, urlPosts);
    console.log(urlPostsLimit);
    return urlPostsLimit;
}

let createBtnRes = function() {
    let btnRes = document.createElement('button');
    btnRes.innerText = 'Clear All';
    btnRes.classList.add('btn_post');
    blockForPosts.insertAdjacentElement('beforeend', btnRes);
    return btnRes;
}

let clearPosts = function() {
    blockForPosts.innerHTML = '';
    amountPost.value = '';
}

function addPost() {
    fetch(getAmountPosts())
        .then(response => {
            if (response.ok) {
                return response.json();

            }
        })
        .then(data => {
            data.forEach(post => {
                const [first, ...rest] = post.title;
                post.title = first.toUpperCase() + rest.join('');
                blockForPosts.insertAdjacentHTML('beforeend', `<p><span>${post.id}</span>.<b>${post.title}</b><br/>${post.body}</p>`)
            });
            const btnReset = createBtnRes();
            btnReset.addEventListener('click', clearPosts);
        })
        .catch(error => console.error(`Error`, error))
        .finally(console.log(`У нас все вийшло!!!`));
        
}

btnAddPost.addEventListener('click', addPost);


