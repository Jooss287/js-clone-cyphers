const searchForm = document.querySelector(".js-search");
const searchBtn = searchForm.querySelector("input[type='submit']");
const searchTxt = searchForm.querySelector("input[type='text']");

const neopleUrl = "https://api.neople.co.kr/cy/"
const apikey = "0rYk7DYbNFelyQguZRmwhWxF1QhZ0yJP";

const tempAPI = "https://api.neople.co.kr/cy/players?nickname=papico&wordType=full&apikey=0rYk7DYbNFelyQguZRmwhWxF1QhZ0yJP"

function submitNickname(event) {
    event.preventDefault();
    
    const nickName = searchTxt.value;

    console.log(nickName);

    fetch(tempAPI);

    
    /*fetch(tempAPI).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });*/

    
    
    //https://api.neople.co.kr/cy/players?nickname=<nickname>&wordType=<wordType>&apikey=0rYk7DYbNFelyQguZRmwhWxF1QhZ0yJP
    
    
    //var searchLink = 'user-search.html';
    //window.location.href = searchLink;
}

function init() {
    // 버튼 클릭하거나 Enter 치거나 둘중 하나
    // Enter부터 구현
    searchForm.addEventListener("submit", submitNickname);
}


init()