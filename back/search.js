const searchForm = document.querySelector(".js-search"),
    searchInput = searchForm.querySelector("input");

function handleSumit(event){
    event.preventDefault();
    const currentValue = searchInput.value;
    searchEngine(currentValue);
}

function searchEngine(searchText){
    location.href = 'https://search.naver.com/search.naver?query=' + searchText;
}

function init() { 
    searchForm.addEventListener("submit", handleSumit);
}


init();