const numbers = [1, 2, 3, 4];

checkNumber = i => {
  return i % 2 !== 0
}

const filteredNumbers = numbers.filter(checkNumber);
doubleNumber = i => {
  return i * 2;
}
let newNumbers = filteredNumbers.map(doubleNumber);


document.getElementById("demo").innerHTML = newNumbers;
