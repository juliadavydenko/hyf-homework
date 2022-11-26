//Age-ify (A future age calculator)

let yearOfBirth = 1991;
let yearFuture = 2027;
let age = (yearFuture - yearOfBirth);
console.log("You will be " + age + " years old in 2027");


//Goodboy-Oldboy (A dog age calculator)
//Here I assume something should've been done differently...
let dogYearOfBirth = 1991;
let dogYearFuture = 2027;
let dogYear = (dogYearFuture - dogYearOfBirth);
let shouldShowResultInDogYears = (dogYear / 7);
function dogAge () {
if (shouldShowResultInDogYears == true) {
  console.log("Your dog will be " + shouldShowResultInDogYears + " dog years old in 2027");
} else {
    console.log("Your dog will be " + dogYear + " human years old in 2027");
}
};



//Housey pricey (A house price estimator)
//For Peter
let height = 10;
let width = 8;
let depth = 10;
let volumeInMeters = height * width * depth;
let gardenSizeInM2 = 100;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);
if (housePrice <= 2500000) {

    console.log("Ouch! Overpaid around 470000 dkk!")
    }
//For Julia
    let height = 8;
    let width = 5;
    let depth = 11;
    let volumeInMeters = height * width * depth;
    let gardenSizeInM2 = 70;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    console.log(housePrice);
    if (housePrice <= 1000000) {

        console.log("Lucky you! Saved around 121000 dkk!")
        }

//Ez Namey (Startup name generator) Optional
let firstWords = ['Conscious ', 'Hilarious ', 'Future ', 'Positive ',
  'Genuis ', 'Flirting ', 'Sophisticated ', 'Free ', 'Mindful ', 'Insightful '];
let secondWords = ['Minds', 'Decisions', 'Solutions', 'Projects',
  'Secrets', 'Tribe', 'Humans', 'Advices', 'Cravings', 'Souls'];
let startupName = firstWords[Math.floor(Math.random() * 10)] + secondWords[Math.floor(Math.random() * 10)];
const startupNameLength = startupName.length
console.log("'The startup: " + "\'" + startupName + "\'" +" contains " + startupNameLength + " characters.'");
const randomNumber = Math.floor(Math.random() * 10);
