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
let levelOneBoolean = true;
if (levelOneBoolean) {
  levelOne();
} else {
  levelTwo();
}

firstLevel.addEventListener("click", levelOne);
counter = 0;
function levelOne() {
  userClick = [];
  computerChoice = [];
  console.log("started level one by clicking start button");
  computerSequence();
}

function computerSequence() {
  let counter = 0;

  console.log("started compseq after level one ");

  colors = ["red", "blue", "green", "yellow"];
  let randomNum = Math.floor(Math.random() * 4);
  computerChoice.push(colors[randomNum]);
  colorOne = computerChoice[0];

  console.log("Random one" + computerChoice[0]);
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
  // userClicked;
  console.log(computerChoice);
}
let userClicks = [];

function userClicked(userClick) {
  if (levelOneBoolean) {
    if (computerChoice[0] === userClick) {
      win();
      levelOneBoolean = false;
      levelTwo();
    } else {
      lose();
    }
  } else {
    function userClicked1(userClick1) {
      userClicks.push(userClick1);
      // userClicks = userClicks + userClick1 + " ";
      console.log(userClicks);

      if (combineColors.split(" ").length === userClicks.length) {
        if (combineColors === userClicks.join(" ")) {
          win();
        } else {
          lose();
        }
      }
    }
    userClicked1(userClick);
  }
}

/*
*******
*/

// // //LEVEL2
startButton.addEventListener("click", levelTwo);
// userClick = [];
// computerChoice = [];

function levelTwo() {
  computerSequence2();
}
function computerSequence2(colors) {
  //Level one random color
  let counter = 0;
  for (let i = 0; i < 3; i++) {
    colors = ["red", "blue", "green", "yellow"];
    let randomNum = Math.floor(Math.random() * 4);
    computerChoice.push(colors[randomNum]);
    colorOne = computerChoice[0];
  }

  //Randamize array
  colors = ["red", "blue", "green", "yellow"];
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  combineColors = colorOne + " " + colors[1];

  console.log("RandomFirstSecond " + combineColors);
  /*
*******
*/
  //Red
  if (combineColors === "red blue") {
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
  } else if (combineColors === "red green") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "red yellow") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "red red") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 450);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  }

  /*
*******Blue
*/
  if (combineColors === "blue blue") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "blue red") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "blue yellow") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "blue green") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  }

  /*
******* Green
*/

  if (combineColors === "green green") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "green red") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "green yellow") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "green blue") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 450);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  }

  /*
*******Yellow
*/

  if (combineColors === "yellow yellow") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "yellow red") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideRedButton()", i);
      setTimeout("showRedButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "yellow blue") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideBlueButton()", i);
      setTimeout("showBlueButton()", i + 800);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  } else if (combineColors === "yellow green") {
    for (var i = 900; i < 1500; i += 900) {
      setTimeout("hideYellowButton()", i);
      setTimeout("showYellowButton()", i + 450);
    }
    for (var i = 1900; i < 3000; i += 1300) {
      setTimeout("hideGreenButton()", i);
      setTimeout("showGreenButton()", i + 450);
    }
    setTimeout("yourTurnTimer()", 3000);
    counter++;
  }
}

/*
*******
*/

/*
*******
*/
function win() {
  score.value = "Score: " + 1;
  yourTurn.value = "Level passed";
  alert("PASSED! Good job!");
}

function lose() {
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
  counter = 0;
  yourTurn.value = "Try Again!";

  alert("Failed, click 'reset' to start again!");
}

resetButton.addEventListener("click", function() {
  counter = 0;
  yourTurn.value = "Start Over, click start";
  score.value = "Score: " + 0;
  clickButtonCounter = 0;
  userClick = [];
  computerChoice = [];
  levelOneBoolean = true;
  levelOne();
  // userClicked();
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
