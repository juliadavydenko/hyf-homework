

//const time = document.getElementById("seconds");

//getting the value of an input
function onClick(elem) {
  const parent = elem.parentNode;
  const value = parent.querySelector('input[type=text]').value;
  if (value == '') {
    console.log('no input');
  } else {
    console.log(value);
  }
 /*because I need to access the value variable, and I can't do that outside this function because of the scope, I will keep adding timeout function inside this function */

  /*the next 2 functions are taking the value(input by user, say 3 or 5, or other) and multiplies it by 1000 because timeout function will work with seconds in the format 1000 for 1 second*/
  function multiply(num1, num2){
    return num1 * num2;
  }
  //creating result variable before so that I can access it after
 let result;
function myValue (num1, num2, operator) {
 result = operator(num1, num2);
  return result
}
  myValue(value, 1000, multiply);


//setting timeout
const myTimeout = setTimeout(myString, result);

function myString() {
  document.getElementById("hidden").innerHTML = "Time's up!"
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
}
  };

//a function when any key is pressed
document.getElementById("input1").addEventListener("keydown", keyPressed);

function keyPressed() {
  document.getElementById("hidden").innerHTML = "You pressed a key!";
};
document.addEventListener("keypress", function(event) {
  //whichKey(event.key);
});

/*function whichKey(key) {
  switch(key) {
    case "s":
      for (event.key = "s") {
  let
}


      break;

    case "l":


  }
}*/
