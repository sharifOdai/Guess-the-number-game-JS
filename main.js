var randomNumber = generateRandomNumber();
var score = 10;
var highscore = 0;
console.log(randomNumber);

document.querySelector(".check").addEventListener("click", () => {
  if (document.querySelector("#currentnumber").value !== "") {
    var userGuess = parseInt(document.querySelector("#currentnumber").value);
    checkGuess(userGuess);
  } else {
    document.querySelector(".message").textContent = "Please write a number";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  initGame();
});

// generate a random number between 1-30
function generateRandomNumber() {
  return Math.ceil(Math.random() * 29);
}

function checkGuess(userGuess) {
  if (userGuess === randomNumber) {
    handleScore("correct");
  } else if (userGuess < randomNumber) {
    handleScore("low");
  } else {
    handleScore("high");
  }
}

function handleScore(action) {
  switch (action) {
    case "correct":
      document.querySelector(".message").textContent = "Correct Number!";
      handleCorrectGuess();
      break;

    case "high":
      if (score > 1) {
        document.querySelector(".message").textContent = "Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Lost The Game!";
        score--;
        document.querySelector(".score").textContent = score;
        removeCheckButton();
      }
      break;

    case "low":
      if (score > 1) {
        document.querySelector(".message").textContent = "Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Lost The Game!";
        score--;
        document.querySelector(".score").textContent = score;
        removeCheckButton();
      }
      break;
  }
}

function handleCorrectGuess() {
  var element = document.querySelector(".game-details-box");
  element.classList.remove("right");
  element.classList.add("right-correct");
  handleHighScore();
  removeCheckButton();
}

function handleHighScore() {
  if (highscore < score) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

function removeCheckButton() {
  document.querySelector(".check").classList.add("non-display-element");
}

function addCheckButton() {
  document.querySelector(".check").classList.remove("non-display-element");
}

function initGame() {
  score = 10;
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  document.querySelector("#currentnumber").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "You can guess now";
  var element = document.querySelector(".game-details-box");
  element.classList.remove("right-correct");
  element.classList.add("right");
  addCheckButton();
}







