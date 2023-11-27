// Header
const gameReset = document.querySelector(".game-reset");
const gameBe = document.querySelector(".nav p");
gameReset.addEventListener("click", () => {
  location.reload();
});

const gameTitleScore = document.querySelector(".game-score h1");
const form = document.querySelector("form");
let randomTwoDigitNumber = Math.floor(Math.random() * 20) + 1;

const gameScoreNumber = document.querySelector(".game-score__number");
const gameGueesing = document.querySelector(".game-gueesing");
const gameHighScore = document.querySelector(".game-high__score");
let score = 20;
let score2 = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  game();
});

function game() {
  const gameInput = document.querySelector(".game-input").value;
  gameTitleScore.textContent = gameInput;
  const gameParseInt = parseInt(gameInput, 10);

  if (gameParseInt === randomTwoDigitNumber) {
    alert("축하합니다!");
    gameHighScore.textContent = `Good HighScore: ${String(score)}`;
    localStorage.setItem("myCat", JSON.stringify(gameHighScore));
  } else if (gameParseInt < randomTwoDigitNumber) {
    score--;
    score2++;
    gameBe.textContent = `BeTween ${String(score2)} and 20`;
    gameScoreNumber.textContent = `Your Score: ${String(score)}`;
    gameGueesing.textContent = "더 높아요!";
  } else if (gameParseInt > randomTwoDigitNumber) {
    gameGueesing.textContent = "더 낮아요!";
  }

  if (score === 0) {
    alert("한번 더 해보세요!");
  } else if (score2 === 20) {
    alert("한번 더 해보세요!");
  }
}
