"use strict";

// Selecting Elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const diceElement = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

let score0 = 0;

// Rolling Dice Functionality
rollBtn.addEventListener("click", function () {
  winCheck();
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `./Images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    changeActivePlayer();
  }
});

holdBtn.addEventListener("click", function () {
  winCheck();
  let sc = Number(
    document.querySelector(`#score--${activePlayer}`).textContent
  );
  sc += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = sc;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  changeActivePlayer();
});

newBtn.addEventListener("click", function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  activePlayer = 1;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
});

function resetGame() {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  activePlayer = 1;
  changeActivePlayer();
}

function changeActivePlayer() {
  winCheck();
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}

const h1 = document.createElement("h1");

function winCheck() {
  if (Number(score0Element.textContent) >= 100) {
    console.log("Player 1 wins");
    h1.innerText = `Player ${activePlayer + 1} Wins`;
    document.querySelector(".main-div").appendChild(h1);
  } else if (Number(score1Element.textContent) >= 100) {
    console.log("Player2 wins");
    h1.innerText = `Player ${activePlayer + 1} Wins`;
    document.querySelector(".main-div").appendChild(h1);
  }
}
