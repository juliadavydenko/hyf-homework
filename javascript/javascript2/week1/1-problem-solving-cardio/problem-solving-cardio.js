//1. Problem solving cardio
// 1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const smallestWord = danishWords.sort((a, b) => a.length - b.length);
console.log(smallestWord[0]);
console.log(danishWords);



//1.2. Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const newArray = danishString.split("")

const danishString2 = "Blå grød med røde bær";
const newArray2 = (danishString2.split("å").length - 1);
(danishString2.split("ø").length - 1);
console.log(newArray2);
Array.from(danishString2);
