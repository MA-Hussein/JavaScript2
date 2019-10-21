'use strict';

const upResetButton = document.querySelector('#up-resetButton');
const downResetButton = document.querySelector('#down-resetButton');
let timerValueLable = document.querySelector('#timerValue-Lable');
let timeDisplyBoard = document.querySelector('#timeDisply-board');
const playButton = document.querySelector('#play-Button');
const pauseButton = document.querySelector('#pause-Button');

let timer = null;
let minutes = 0;

//This function increases the time.
const upResetCounter = function() {
  minutes = parseInt(timerValueLable.textContent, 10); // parseInt returns an integer.
  if (timer === null) {
    timerValueLable.textContent = minutes + 1;
    resetTime();
  }
};

// This function decreases the time.
function downResetCounter() {
  if (timer === null) {
    minutes = parseInt(timerValueLable.textContent);
    if (minutes > 0) {
      timerValueLable.textContent = minutes - 1;
    }
    resetTime();
  }
}

// This function is for reset the timer value in Lable and display it on DisplyBoard to be as a clock style.
function resetTime() {
  minutes = parseInt(timerValueLable.textContent, 10);
  timeDisplyBoard.textContent = `${minutes < 10 ? '0' + minutes : minutes}:00`;
}

// This function running the time counter.
function timeCounter() {
  const time = timeDisplyBoard.textContent.split(':');
  let seconds = parseInt(time[0], 10) * 60 + parseInt(time[1], 10); 
	--seconds;

  if (seconds === 0) {
    timeDisplyBoard.textContent = `Time's up!`;
    window.clearInterval(timer);
    timer = null;
    return;
  }
  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  timeDisplyBoard.textContent = `${minute < 10 ? '0' + minute : minute}:${
    seconds < 10 ? '0' + seconds : seconds
  }`;
}
function play() {
  if (timer === null) {
    timer = window.setInterval(() => {
      timeCounter();
    }, 1000);
  }
}
function pause() {
  window.clearInterval(timer);
  timer = null;
}
upResetButton.addEventListener('click', upResetCounter);
downResetButton.addEventListener('click', downResetCounter);
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
