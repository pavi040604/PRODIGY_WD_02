let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const display = document.getElementById('display');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        startStopBtn.innerHTML = 'Stop';
        lapBtn.disabled = false;
        running = true;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = 'Start';
        lapBtn.disabled = true;
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    startStopBtn.innerHTML = 'Start';
    lapBtn.disabled = true;
    running = false;
    display.innerHTML = '00:00:00';
    difference = 0;
    laps.innerHTML = '';
    lapCounter = 0;
}

function recordLap() {
    lapCounter++;
    const lapTime = display.innerHTML;
    const lapItem = document.createElement('li');
    lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
    laps.appendChild(lapItem);
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    display.innerHTML = (hours < 10 ? "0" : "") + hours + ":"
                        + (minutes < 10 ? "0" : "") + minutes + ":"
                        + (seconds < 10 ? "0" : "") + seconds + ":"
                        + (milliseconds < 10 ? "0" : "") + milliseconds;
}
