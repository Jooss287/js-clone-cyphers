const searchForm = document.querySelector(".js-search");
const searchBtn = searchForm.querySelector("input[type='submit']");
const searchTxt = searchForm.querySelector("input[type='text']");

function onClickSearch() {
    console.log("clicked");
    
    var searchLink = 'user-search.html';
    window.location.href = searchLink;
}

function submitNickname(event) {
    event.preventDefault();
    onClickSearch();
}

function init() {
    // 버튼 클릭하거나 Enter 치거나 둘중 하나
    // Enter부터 구현
    searchForm.addEventListener("submit", submitNickname);
}


init()