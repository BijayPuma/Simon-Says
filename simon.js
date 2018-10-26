let redButton = document.querySelector(".RedButton");
let blueButton = document.querySelector(".BlueButton");
let greenButton = document.querySelector(".GreenButton");
let yellowButton = document.querySelector(".YellowButton");
let startButton = document.querySelector(".StartButton");
let firstLevel = document.querySelector(".LevelOne");
let yourTurn = document.querySelector(".YourTurn");
let score = document.querySelector(".Score");
let resetButton = document.querySelector(".Reset");

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

/*
*******
*/
alert("Click 'start button' to start");
firstLevel.addEventListener("click", levelOne);

let counter = 0;
userClick = [];
computerChoice = [];
function levelOne() {
  console.log("started level one by clicking start button");
  computerSequence();
}

function computerSequence() {
  console.log("started compseq after level one ");

  colors = ["red", "blue", "green", "yellow"];
  let randomNum = Math.floor(Math.random() * 4);
  computerChoice.push(colors[randomNum]);
  for (i = 0; i < computerChoice.length; i++) {
    if (computerChoice[0] === "red") {
      hideRedButton();
      showRedButton();
      for (var i = 900; i < 1500; i += 900) {
        setTimeout("hideRedButton()", i);
        setTimeout("showRedButton()", i + 450);
      }

      setTimeout("yourTurnTimer()", 1500);
      counter++;
    } else if (computerChoice[0] === "blue") {
      hideBlueButton();
      showBlueButton();
      for (var i = 900; i < 1500; i += 900) {
        setTimeout("hideBlueButton()", i);
        setTimeout("showBlueButton()", i + 450);
      }

      setTimeout("yourTurnTimer()", 1500);
      counter++;
    } else if (computerChoice[0] === "green") {
      hideGreenButton();
      showGreenButton();
      for (var i = 900; i < 1500; i += 900) {
        setTimeout("hideGreenButton()", i);
        setTimeout("showGreenButton()", i + 450);
      }

      setTimeout("yourTurnTimer()", 1500);
      counter++;
    } else if (computerChoice[0] === "yellow") {
      hideYellowButton();
      showYellowButton();
      for (var i = 900; i < 1500; i += 900) {
        setTimeout("hideYellowButton()", i);
        setTimeout("showYellowButton()", i + 450);
      }
      setTimeout("yourTurnTimer()", 1500);
      counter++;
    }
  }
  userClicked;
  console.log(computerChoice);
}
function userClicked(userClick) {
  console.log("started userclicked after comp sequence ");
  console.log("User choice: " + userClick);
  console.log("computer choice inside userClicked: " + computerChoice);
  if (computerChoice[0] === userClick) {
    win();
  } else {
    lose();
  }
}

/*
*******
*/

//LEVEL2
//startButton.addEventListener("click", levelTwo);
// startButton.addEventListener("click", levelTwo);

// let counter = 0;
// userClick = [];
// computerChoice = [];

// function levelTwo() {
//   computerSequence();
// }
// function computerSequence(colors) {
//   //Level one random color
//   for (let i = 0; i < 3; i++) {
//     colors = ["red", "blue", "green", "yellow"];
//     let randomNum = Math.floor(Math.random() * 4);
//     computerChoice.push(colors[randomNum]);
//     colorOne = computerChoice[0];
//   }

//   //Randamize array
//   colors = ["red", "blue", "green", "yellow"];
//   for (let i = colors.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [colors[i], colors[j]] = [colors[j], colors[i]];
//   }
//   for (let i = 0; i < 2; i++) {
//     hey = [];
//     hey.push(colors[i]);
//   }

//   combineColors = colorOne + colors[1];

//   console.log("RandomFirstSecond " + combineColors);
//   /*
// *******
// */
//   //Red
//   if (combineColors === "redblue") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "redgreen") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "redyellow") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "redred") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 450);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   }

//   /*
// *******Blue
// */
//   if (combineColors === "blueblue") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "bluered") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "blueyellow") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "bluegreen") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   }

//   /*
// ******* Green
// */

//   if (combineColors === "greengreen") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "greenred") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "greenyellow") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "greenblue") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 450);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   }

//   /*
// *******Yellow
// */

//   if (combineColors === "yellowyellow") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "yellowred") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideRedButton()", i);
//       setTimeout("showRedButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "yellowblue") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideBlueButton()", i);
//       setTimeout("showBlueButton()", i + 800);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   } else if (combineColors === "yellowgreen") {
//     for (var i = 900; i < 1500; i += 900) {
//       setTimeout("hideYellowButton()", i);
//       setTimeout("showYellowButton()", i + 450);
//     }
//     for (var i = 1900; i < 3000; i += 1300) {
//       setTimeout("hideGreenButton()", i);
//       setTimeout("showGreenButton()", i + 450);
//     }
//     setTimeout("yourTurnTimer()", 3000);
//     counter++;
//   }
// }

// /*
// *******
// */

// // userClicked;

// userClicks = "";
// function userClicked(userClick) {
//   userClicks += userClick;
//   console.log(userClicks);
//   if (combineColors === userClicks) {
//     win();
//   } else {
//     lose();
//   }
// }

/*
*******
*/
function win() {
  score.value = "Score: " + "2";
  yourTurn.value = "Level passed";
  alert("PASSED! click 'start' to go next level");
}

function lose() {
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
  counter = 0;
  yourTurn.value = "Try Again!";

  //alert("Failed, click 'start' to start again! 'Reset' to quit.");
}

resetButton.addEventListener("click", function() {
  counter = 0;
  yourTurn.value = "Start Over, click start";
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
  userClick = [];
  computerChoice = [];
});

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
