let redButton = document.querySelector(".RedButton");
let blueButton = document.querySelector(".BlueButton");
let greenButton = document.querySelector(".GreenButton");
let yellowButton = document.querySelector(".YellowButton");

let startButton = document.querySelector(".StartButton");
let yourTurn = document.querySelector(".YourTurn");
let score = document.querySelector(".Score");
let resetButton = document.querySelector(".Reset");

let counter = 0;

function whichButton() {
  console.log(event.srcElement.className);
}

// startButton.addEventListener("click", function() {
//   hideRedButton();
//   showRedButton();

//   for (var i = 900; i < 2300; i += 900) {
//     setTimeout("hideRedButton()", i);
//     setTimeout("showRedButton()", i + 450);
//   }

//   yourTurn.value = "Your Turn";
//   counter++;
// });

// redButton.addEventListener("click", function() {
//   score.value = "Score: " + counter;
//   yourTurn.value = "Level 1 passed";
// });

startButton.addEventListener("click", function() {
  hideRedButton();
  showRedButton();
  hideBlueButton();
  showBlueButton();

  for (var i = 900; i < 1500; i += 900) {
    setTimeout("hideRedButton()", i);
    setTimeout("showRedButton()", i + 450);
  }

  for (var i = 1900; i < 3000; i += 1300) {
    setTimeout("hideBlueButton()", i);
    setTimeout("showBlueButton()", i + 800);
  }

  setTimeout("yourTurnTimer()", 3000);
  counter++;
});

// resetButton.addEventListener("click", function() {
//   counter = 0;
//   yourTurn.value = "Start Over, click start";
//   score.value = "Score: " + 0;
// });

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

function yourTurnTimer() {
  return (yourTurn.value = "Your Turn");
}
