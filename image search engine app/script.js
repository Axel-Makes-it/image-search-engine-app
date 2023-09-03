const accessKey = "lXqOp3fe8xRPa2agvUZBDBgSHms-I68EtjkOxMWgKr4";

const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const searchBtn = document.querySelector("#show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerText = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();

  searchBtn.style.display = "block";
});

searchBtn.addEventListener("click", (e) => {
  console.log("works");
  page++;
  searchImages();
});
