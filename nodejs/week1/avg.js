// Get the command line arguments (According to nodejs documentation, the process.argv property returns an array with the command-line arguments passed and the first element will be the path to node itself and the second will be the path to the javascript code, and so they will have indexes of 0 and 1 in this array respectively. But as soon as we need pure input from the command line, we can use slice.

const userInput = process.argv.slice(2);

// Taking into consideration this optional part of the task: “What should happen if the provided arguments are not numbers (node avg.js 1 two hello 4)”?
// We preventively convert the arguments to numbers and store them in the array.
const numbers = userInput.map(arg => parseFloat(arg));

// Calculate the sum of the numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// I could also add all the numbers together by using a for loop, or forEach loop. However, we also have this “What about if no arguments are provided (node avg.js)?” line in our optional task. So to prevent getting a NaN as a result if no input is provided we can use the reduce method as it can handle empty arrays and arrays with a single element, So in this case, with no input, we would get 0 as the result.


// Calculate the average of the numbers
const average = sum / userInput.length;

// Print the average to the console
console.log(`${average}`);