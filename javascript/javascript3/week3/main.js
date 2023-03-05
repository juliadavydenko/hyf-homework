



// Get references to DOM elements
/*const urlForm = document.querySelector('#url-form');
const urlInput = document.querySelector('#url-input');
const canvas = document.querySelector('#screenshot-canvas');

// Add event listener to form submit event
urlForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get website URL from input field

  const url = `https://${urlInput.value.trim()}`;


const accessKey = "65b1b3a4b43d463ba5bdb3b38d73342a"; // API access key
const apiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${encodeURIComponent(url)}&format=png`;

fetch(apiUrl)
  .then(response => response.blob())
  .then(blob => {
    // Create a new image element
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    // Append the image to the document body
    document.body.appendChild(img);
  fetch(`https://crudcrud.com/api/04f154975b3a4ad1bd24cb9aa6091e2e/screenshots`, {method:"POST", body:JSON.stringify({src:URL.createObjectURL(blob)})})
  })
  .catch(error => {
    console.error('Error:', error);
  });
});*/


