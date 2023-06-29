"use strict";

//selecting elements
const player1EL = document.querySelector(".leftside");
const player2EL = document.querySelector(".rightside");
const score0EL = document.querySelector("#play1");
const score1EL = document.getElementById("play2");
const current0EL = document.getElementById("cur-1");
const current1EL = document.getElementById("cur-2");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

//starting condition
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;

const switchPlayer = function () {
  document.getElementById(`cur-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
};

//rolling dice functionality

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`cur-${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;

  document.getElementById(`play-${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
