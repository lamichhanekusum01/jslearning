'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '25';
document.querySelector('.guess').value = '2';
//console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage('NO NUMBER');
    // document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    displayMessage('✨correct Number');
    //document.querySelector('.message').textContent = '✨correct Number';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '60rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /* else if (guess !==secretNumber){
      if (score > 1) {
        document.querySelector('.message').textContent = '🤞 too high':;
        score--;
        document.querySelector('.score').textContent = score;
    } */
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🤞 too high' : '🤔too low');
      //document.querySelector('.message').textContent =

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //'😒 oOpPs,you lost the game';
      displayMessage('😒 oOpPs,you lost the game');
      document.querySelector('.score').textContent = 0;
    }

    /*   } else if (guess < secretNumber) {
        if (score > 1) {
          document.querySelector('.message').textContent = '🤔too low';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent =
            '😒 oOpPs,you lost the game';
        }
      }*/
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing ');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '30rem';
});
// //Working with strings

// const airline ='TIA of red egg';
// const names ='A89a'
// console.log(names[0]);
// console.log(names[3]);
// console.log('Anksa'.length);
// console.log(airline.length);
// //string methods
// console.log(airline.indexOf('e'));
// console.log(airline.lastIndexOf('e'));

// console.log(airline.slice(4));
// console.log(airline.slice(1,-4));

// //check middle seat
//  const checkMiddleSeat = function(seat)
//  {//B and e are middle seat 
//    const s=seat.slice(-1)
//    if(s=='B'|| s==='E')
//    console.log('you got the middle seat');
//    else console.log('you got lucky')

//  }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// console.log(new String ('jonas'));
// console.log(typeof new String ('jonas'));
// console.log(typeof new String ('jonas').slice(-1));
