
/* DONT MODIFY ANY OF THIS CODE!!!*/

window.getAvailableProducts = function() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomItem(availableProductNames) {
    return availableProductNames[
      getRandomInt(0, availableProductNames.length - 1)
    ];
  }

  function getRandomProductname() {
    const preWords = [
      "Used",
      "Fantastic",
      '"Used"',
      "Broken",
      "Beautiful",
      "Wet",
      "Green",
      "Sloppy",
      "Dirty"
    ];
    const productNames = [
      "Carrot",
      "Drone",
      "Giftcard",
      "Puppy",
      "Car",
      "Shirt",
      "Milk",
      "Chalk",
      "Fish fingers",
      "Socks",
      "Chocolate",
      "Toothbrush",
      "Computer",
      "Nokia",
      "Cologne"
    ];

    let chosenProductName = getRandomItem(productNames);
    const shouldHavePreWord = getRandomInt(0, 10) > 6;

    if (shouldHavePreWord) {
      const preWord = preWords[getRandomInt(0, preWords.length - 1)];
      chosenProductName = `${preWord} ${chosenProductName}`;
    }

    return chosenProductName;
  }

  const numberOfAvailableProducts = getRandomInt(0, 30);
  const availableProducts = Array.apply(
    null,
    Array(numberOfAvailableProducts)
  ).map(() => {
    const name = getRandomProductname();
    return {
      id: `${name}${getRandomInt(0, 100000)}`,
      name,
      price: getRandomInt(0, 10000),
      rating: getRandomInt(1, 10)
    };
  });

  return availableProducts;
};

//my last week's solution code
const products = getAvailableProducts();

const ul = document.querySelector('ul');
function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
            </ul>
        `;
      ul.appendChild(li);
    });
}
renderProducts(products);
console.log()

//this week's tasks
//task1. Filter products

const searchTerm = document.getElementById("searchTerm");

searchTerm.addEventListener("input", handleSearch);

function handleSearch(event) {
  const searchTerm = searchTerm.value;
  // const searchTerm = "Menace";
  // console.log("text:", event.value);

  const searchResults = movies
    .sort()
    .filter((movie) => movie.title.includes(searchTerm))
    .map((movie) => `<li>${movie.title}</li>`)
    .join("");

  document.getElementById("searchedMovies").innerHTML = `
  <ul>
    ${searchResults}
  </ul>
  `;
}

//task2 Searching for products
//task3 Filter products based on max price
//task4 Make the website look nicer!
//task5 Create some extra feature
//task6 Sort the products - optional


/*Suggested solytion from HYF:

console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);*/
