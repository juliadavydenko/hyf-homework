const searchGif = document.querySelector("#search-gif");
searchGif.addEventListener("submit", fetchGif);

function fetchGif(e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".search").value;
  const userLimit = document.querySelector(".input").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=${userLimit}&api_key=NN2Z4yw6P9cV4v5ONSzu2iw3NzeS4Urb`)
    .then((response) => {return response.json(); })
    .then((resp => {
     
        let dataArray = resp.data
        showGif(dataArray);
    }))
    .catch(err => console.log(err)); 
}

function showGif(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="container">';
  dataArray.forEach((imgData) => {
    output += `
  <img src="${imgData.images.fixed_width.url}"/>
`;
  });
  document.querySelector('.results').innerHTML = output;
}