let redButton = document.querySelector(".RedButton");
let startButton = document.querySelector(".StartButton");
let yourTurn = document.querySelector(".YourTurn");

startButton.addEventListener("click", function() {
  redButton.style.background = "black";
  yourTurn.name = "you";
});
