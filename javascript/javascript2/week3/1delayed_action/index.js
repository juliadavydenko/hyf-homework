//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const myTimeout = setTimeout(delayedAction, 2500);

function delayedAction() {
  document.getElementById("newdelay").innerHTML = "Called after 2.5 seconds"
};

//2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.


let time;
const newTimeout = setTimeout(newFunction, time);
function newFunction(delay, stringToLog) {
  time = delay * 1000;
  console.log("This string " + stringToLog + " logged after " + delay + " seconds"); document.getElementById("delay2").innerHTML = "This string is delayed and shown properly in the console, because here it goes UNDEFINED";
};
newFunction(5,"Hi");

//3.Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const buttonTimeout = setTimeout(hiddenText, 5000);

function hiddenText() {
  document.getElementById("hidden").innerHTML = "Called after 5 seconds 5 seconds after the button is clicked!"
};


//4.Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
function earthLogger() {
  console.log("Earth");
};
function saturnLogger() {
  console.log("Saturn");
};
const firstFunction = earthLogger();
const secondFunction = saturnLogger();

function planetLogFunction() {
  console.log();
};
planetLogFunction(earthLogger());
planetLogFunction(saturnLogger());


//5.Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api.
const x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
};


/*6.Optional Now show that location on a map using fx the Google maps api.
It gives an error with different platforms - "Google Maps JavaScript API error: RefererNotAllowedMapError
referer-not-allowed-map-error
Your site URL to be authorized: https://cdpn.io/cpe/boomboom/index.html"
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;
*/

//7.Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
setTimeout(function() {callback();}, delay * 1000);
};
runAfterDelay(4, function() {
  console.log("should be logged after 4 seconds"); document.getElementById("runafterdelay").innerHTML = "Saying hi after the delay!";
});
//delay goes undefined if I try to log it

//8.Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
document.addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("doubleclick").innerHTML = "Double-click!";
};
//9.Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  logFunnyJoke = function() {
    console.log("Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.");
    document.getElementById("joke").innerHTML = "Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.";
  };

  logBadJoke = function() {
    console.log("Knock!Knock!Who’s there?Control Freak.Con…OK, now you say, Control Freak who?");
    document.getElementById("joke").innerHTML = "Knock!Knock!Who’s there?Control Freak.Con…OK, now you say, Control Freak who?";
  };

  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
     }
};
jokeCreator();
