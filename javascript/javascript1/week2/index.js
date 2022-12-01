// Flight booking fullname function

const useFormalName = "Lord" + getFullname;

getFullname("Benjamin", "Hughes", useFormalName);
let fullname1  = "Benjamin";
let fullname2  = "Hughes";
function getFullname(fullname1, fullname2) {
  if (useFormalName) {
  return ("Lord" + " " + fullname1 + " " + fullname2)
} else {
  return (fullname1 + " " + fullname2)
}
}
getFullname(fullname1, fullname2);
/* the getFullname for women will work the similar way: we need to create boolean variable useWomenName and if it's true
we should use Queen as a formal way instead of Lord.
*/

// Event application
function getEventWeekday(){
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const todaysDate = new Date();

}
// Weather wear

function whatToWear(a) {
  if (a >= 0 && a <= 15) {
    console.log("Wear jeans and a jacket")
  } else if (a >= 16) {
    console.log("Wear top and shirts")
  } else {
    console.log("Wear a space suit - it is too cold!")
  }
}
const clothesToWear = whatToWear(5);
console.log(clothesToWear);

// Student manager

const class07Students = [];
const queenName = "Queen";
function addStudentToClass(studentName) {
for (let i = 0; i < 6; i++) {
  class07Students.push(studentName);
  return class07Students;
}
if (class07Students.length >= 6){
  return "Class 07 is full. Please wait for the next one"
}
if (studentName === queenName)  {
  return class07Students.push("Queen");
}
else if (class07Students.element === studentName) {
console.log(studentName + " is already in the class")
}
else if (studentName.length < 1){
  return "Please write your name"
}
addStudentToClass("Hii");

function getNumberOfStudents(class07Students) {
console.log(class07Students.lenght);
}


// Candy helper optional
