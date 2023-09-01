const timeDisplay = document.querySelector('.time');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

let isRunning = false;
let startTime;
let elapsedTime = 0;
let intervalId;

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

function startStop() {
  if (isRunning) {
    clearInterval(intervalId);
    startStopButton.textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 100);
    startStopButton.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(intervalId);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
  startStopButton.textContent = 'Start';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
