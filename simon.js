let redButton = document.querySelector(".RedButton");
let blueButton = document.querySelector(".BlueButton");
let greenButton = document.querySelector(".GreenButton");
let yellowButton = document.querySelector(".YellowButton");

let startButton = document.querySelector(".StartButton");
let yourTurn = document.querySelector(".YourTurn");
let score = document.querySelector(".Score");

let counter = 0;

startButton.addEventListener("click", function() {
  yourTurn.value = "Your Turn";
  counter++;
});

// redButton.addEventListener("click", function() {
//   score.value = "Score: " + counter;
// });

// var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
// var currentIndex = 0;

// setInterval(function() {
//   document.body.style.cssText = "background-color: " + colors[currentIndex];
//   currentIndex++;
//   if (currentIndex == undefined || currentIndex >= colors.length) {
//     currentIndex = 0;
//   }
// }, 1000);

function hide() {
  if (document.querySelector)
    document.querySelector(".RedButton").style.visibility = "hidden";
}

function show() {
  if (document.querySelector)
    document.querySelector(".RedButton").style.visibility = "visible";
}

for (var i = 900; i < 2300; i += 900) {
  setTimeout("hide()", i);
  setTimeout("show()", i + 450);
}
