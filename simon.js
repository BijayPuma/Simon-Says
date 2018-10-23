let redButton = document.querySelector(".RedButton");
let blueButton = document.querySelector(".BlueButton");
let greenButton = document.querySelector(".GreenButton");
let yellowButton = document.querySelector(".YellowButton");
redButton.value = 1;
blueButton.value = 2;
let startButton = document.querySelector(".StartButton");
let yourTurn = document.querySelector(".YourTurn");
let score = document.querySelector(".Score");
let resetButton = document.querySelector(".Reset");

let counter = 0;

resetButton.addEventListener("click", function() {
  counter = 0;
  yourTurn.value = "Start Over, click start";
  score.value = "Score: " + 0;
});

startButton.addEventListener("click", function() {
  hideRedButton();
  showRedButton();
  for (var i = 900; i < 2300; i += 900) {
    setTimeout("hideRedButton()", i);
    setTimeout("showRedButton()", i + 450);
  }

  yourTurn.value = "Your Turn";
  counter++;
});

redButton.addEventListener("click", function() {
  score.value = "Score: " + counter;
  yourTurn.value = "Level 1 passed";
});

blueButton.addEventListener("click", function() {});

function hideRedButton() {
  redButton.style.visibility = "hidden";
}

function showRedButton() {
  redButton.style.visibility = "visible";
}

function hideBlueButton() {
  blueButton.style.visibility = "hidden";
}

function showBlueButton() {
  blueButton.style.visibility = "visible";
}
