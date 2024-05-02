const search = document.getElementById('search');
const searchBar= document.getElementById('searchbar');
const searchResult = document.getElementById('searchresult');
const searchBtn = document.getElementById('showmore');

const accessKey = "TuKmzq9peX4MFg_V35B-AIDrrGmex9rt8EqAN9pJJ_k"

let keyboard = "";
let page = 1;

async function searchImages(){
    keyword = searchBar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;

    if (page === 1){
        searchResult.innerHTML = "";
        searchBtn.style.display = "none";
    }

    results.map((result)=>{
        const image = document.createElement("img");
        image.src =result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    searchBtn.style.display = "block";


}

search.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

searchBtn.addEventListener("click", (e) => {
    page++;
    searchImages();
})