//const userInput = document.querySelector(".userInput");
const container = document.querySelector(".container");
//const btn = document.querySelector(".btn");





const btn = document.getElementById('btn');

btn.addEventListener("click", download);
const token = "JVY0M9H-PH0M87T-H71TBVQ-MZTFHKW";
const userInput = document.querySelector(".userInput");
let inputValue = userInput.value;
const url = "https://shot.screenshotapi.net/screenshot?token="+token+"&url=https%3A%2F%2F"+inputValue+"&output=image&file_type=png&wait_for_event=load";
/*
https://shot.screenshotapi.net/screenshot?token=JVY0M9H-PH0M87T-H71TBVQ-MZTFHKW&url=https%3A%2F%2Fgoogle.com&output=image&file_type=png&wait_for_event=load
*/
function download(event) {
  fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));
};



/*fetch(url)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    fetch('https://crudcrud.com/api/8a9529554ab9479c9fb11bdff078494c')
};
*/