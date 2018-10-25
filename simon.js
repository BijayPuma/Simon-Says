let redButton = document.querySelector(".RedButton");
let blueButton = document.querySelector(".BlueButton");
let greenButton = document.querySelector(".GreenButton");
let yellowButton = document.querySelector(".YellowButton");

let startButton = document.querySelector(".StartButton");
let yourTurn = document.querySelector(".YourTurn");
let score = document.querySelector(".Score");
let resetButton = document.querySelector(".Reset");

let counter = 0;
let clickButtonCounter = 0;

redButton.addEventListener("click", function() {
  userClicked("red");
});
blueButton.addEventListener("click", function() {
  userClicked("blue");
});
greenButton.addEventListener("click", function() {
  userClicked("green");
});
yellowButton.addEventListener("click", function() {
  userClicked("yellow");
});

startButton.addEventListener("click", levelOne);
/*

1) add equal sign
2) change button and it shows and hides right button
3)git rid off else at the end of levelone if statement

*/
userClick = [];
computerChoice = [];

// function levelOne() {
//   computerSequence();
//   if (computerChoice[0] === "red") {
//     hideRedButton();
//     showRedButton();
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }

//     setTimeout("yourTurnTimer()", 1500);
//     counter++;
//   } else if (computerChoice[0] === "blue") {
//     hideBlueButton();
//     showBlueButton();
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }

//     setTimeout("yourTurnTimer()", 1500);
//     counter++;
//   } else if (computerChoice[0] === "green") {
//     hideGreenButton();
//     showGreenButton();
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }

//     setTimeout("yourTurnTimer()", 1500);
//     counter++;
//   } else if (computerChoice[0] === "yellow") {
//     hideYellowButton();
//     showYellowButton();
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 450);
//     }

//     setTimeout("yourTurnTimer()", 1500);
//     counter++;
//   }
//   computerChoice = [];
// }

function computerSequence() {
  colors = ["red", "blue", "green", "yellow"];
  let randomNum = Math.floor(Math.random() * 4);
  computerChoice.push(colors[randomNum]);
}

function startSequence() {
  computerSequence;
}
//let computerChoice = computerSequence();

function userClicked(userClick) {
  console.log("computer choice " + computerChoice);
  console.log("user choice " + userClick);
  if (computerChoice[0] === userClick) {
    win();
  } else {
    lose();
  }
}

function win() {
  score.value = "Score: " + counter;
  yourTurn.value = "Level passed";
  alert("PASSED! click 'start' to go next level");
}

function lose() {
  yourTurn.value = "Failed, click start";
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
  counter = 0;
  alert("Failed, click 'start' to start again! 'Reset' to quit.");
}

// switch()

resetButton.addEventListener("click", function() {
  counter = 0;
  yourTurn.value = "Start Over, click start";
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
});

//LEVEL2
// function levelTwo() {
//   hideRedButton();
//   showRedButton();
//   hideBlueButton();
//   showBlueButton();

//   for (var i = 900; i < 1500; i += 900) {
//     setTimeout("hideRedButton()", i);
//     setTimeout("showRedButton()", i + 450);
//   }

//   for (var i = 1900; i < 3000; i += 1300) {
//     setTimeout("hideBlueButton()", i);
//     setTimeout("showBlueButton()", i + 800);
//   }

//   setTimeout("yourTurnTimer()", 3000);
//   counter++;
// }

// function userClicked(userClick) {
//   let clicks = []

// }

// function whichButton() {
//   let clickedButtons = [event.srcElement.className];
//   console.log("Button clicked" + clickedButtons);

//   clickButtonCounter++;
//   console.log("Clicked button times: " + clickButtonCounter);
// }

// startButton.addEventListener("click", function() {
//   hideRedButton();
//   showRedButton();
//   for (var i = 900; i < 1500; i += 900) {
//     setTimeout("hideRedButton()", i);
//     setTimeout("showRedButton()", i + 450);
//   }

//   setTimeout("yourTurnTimer()", 1500);
//   counter++;
//   console.log("counter: " + counter);
// });

// redButton.addEventListener("click", function() {
//   score.value = "Score: " + counter;
//   yourTurn.value = "Level 1 passed";
//   alert("PASSED! click start to go next level");
// });
// blueButton.addEventListener("click", function() {
//   yourTurn.value = "Failed, click start";
//   score.value = "Score: " + 0;
//   clickButtonCounter = 0;
//   counter = 0;
//   alert("Failed, click start again! Reset to quit.");
// });
// greenButton.addEventListener("click", function() {
//   yourTurn.value = "Failed, click start";
//   score.value = "Score: " + 0;
//   clickButtonCounter = 0;
//   counter = 0;
//   alert("Failed, click start again! Reset to quit.");
// });
// yellowButton.addEventListener("click", function() {
// yourTurn.value = "Failed, click start";
// score.value = "Score: " + 0;
// clickButtonCounter = 0;
// counter = 0;
// alert("Failed, click start again! Reset to quit.");
// });

// startButton.addEventListener("click", function() {
//   hideRedButton();
//   showRedButton();
//   hideBlueButton();
//   showBlueButton();

//   for (var i = 900; i < 1500; i += 900) {
//     setTimeout("hideRedButton()", i);
//     setTimeout("showRedButton()", i + 450);
//   }

//   for (var i = 1900; i < 3000; i += 1300) {
//     setTimeout("hideBlueButton()", i);
//     setTimeout("showBlueButton()", i + 800);
//   }

//   setTimeout("yourTurnTimer()", 3000);
//   counter++;
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

function hideGreenButton() {
  greenButton.style.visibility = "hidden";
}

function showGreenButton() {
  greenButton.style.visibility = "visible";
}

function hideYellowButton() {
  yellowButton.style.visibility = "hidden";
}

function showYellowButton() {
  yellowButton.style.visibility = "visible";
}

function yourTurnTimer() {
  return (yourTurn.value = "Your Turn");
}
