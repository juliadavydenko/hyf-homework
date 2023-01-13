//2. Spirit animal name generator
/*for no input - used form tags and required attribute hovewer it doesn't work properly (tried preventDefault but it conflicts with other commands)*/
spiritAnimals = ["Shy Shark", "Naughy Penguin", "Happy Quokka", "Surprised Bear", "Smiling Giraffe", "Tidy Bird", "Funny Cat", "Positive Cow", "Humble Horse", "Hungry Wolf" ];

let userName;
  function readUsername() {
  var x = document.getElementById("userName").value;
    let output = ""
    if (userName == "") {
      output = "please enter your username";
    } else {
      const randomElement = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
console.log(randomElement);
      output = document.getElementById("answer").innerHTML = (x + " - " + randomElement);
    };
    document.getElementById("answer").innerHTML = output;
    }


document.querySelector("select")
.addEventListener("change", function() {
  if(document.getElementById("button-click").selected == true) {
  console.log("user selected buttonclick.")
  document.getElementById("submit").onclick = readUsername;
document.getElementById("submit").disabled = false;

  document.getElementById("userName").onhover = function(){};
document.getElementById("userName").onkeyup = function(){};
} else if (document.getElementById("hover").selected == true) {
       console.log("user selected hover.")
document.getElementById("userName").onmouseover = readUsername;
document.getElementById("submit").disabled = true;

  document.getElementById("userName").onkeyup = function(){};

  } else if (document.getElementById("type").selected == true) {
       console.log("user selected button typing.")
document.getElementById("userName").onkeyup = readUsername;
document.getElementById("submit").disabled = true;

  document.getElementById("userName").onhover = function(){};
}
                 })

function reloadWindow() {
  window.location.reload(readUsername());
}
