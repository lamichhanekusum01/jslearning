'use strict';
//defining
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const Hold = document.querySelector('.btn--hold');
const RollDice = document.querySelector('.btn--roll');
const NewGame = document.querySelector('.btn--new');
//starting conditions
const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;

diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
RollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    //document.getElementById(`current--${activePlayer}`).textContent =
    // currentScore;

    current0El.textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
