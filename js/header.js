const logoBox = document.querySelector('.js-logo');
const logoImg = document.querySelector('img');

function gotoIndex(event) {
    console.log('gotoIndex');
    var searchLink = 'index.html';
    window.location.href = searchLink;
}

function init() {
    logoImg.addEventListener('click', gotoIndex);
}

init();