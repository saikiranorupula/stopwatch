const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");
const ms = document.getElementById("ms");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let time = 0;
let interval;

startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(start, 10);
})


const updateUI = (...arg) => {
    hh.innerText = parseInt(arg[0]);
    mm.innerText = parseInt(arg[1]);
    ss.innerText = parseInt(arg[2]);
    ms.innerText = parseInt(arg[3]);
}

const start = () => {
    let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    time++;
    seconds = time / 100;
    hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    milliseconds = parseInt(time) - ((parseInt(hours) * 3600 * 100) + parseInt(minutes) * 60 * 100 + parseInt(seconds) * 100);
    updateUI(hours, minutes, seconds, milliseconds);
}

const stop = () => {
    clearInterval(interval)
}

stopButton.addEventListener('click', stop)

const reset = () => {
    clearInterval(interval)
    time = 0;
    updateUI(0, 0, 0, 0);
}

resetButton.addEventListener('click', reset)


//// OPTION 2

function Stopwatch() {
    let interval, startTime, endTime, running, duration = 0;
    this.start = () => {
        if (running) {
            alert('Stopwatch already running')
        }
        running = true;
        interval = setInterval(() => {
            duration++;
            this.updateUI();
        }, 10)

    }
    this.stop = () => {
        if (!running) {
            alert('Stopwatch not running yet')
        }
        running = false;
        clearInterval(interval)
    }
    this.reset = () => {
        clearInterval(interval)
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    this.updateUI = () => {
        let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
        seconds = duration / 100;
        hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        minutes = parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
        milliseconds = parseInt(duration) - ((parseInt(hours) * 3600 * 100) + parseInt(minutes) * 60 * 100 + parseInt(seconds) * 100);
        hh.innerText = hours;
        mm.innerText = minutes;
        ss.innerText = seconds;
        ms.innerText = milliseconds;
    }
    Object.defineProperty(this, 'duration', {
        get: () => {
            return duration;
        }
    })
}

const stopWatch = new Stopwatch();

/// attach stopwatch.start() to addevent listner of start button
/// attach stopwatch.stop() to addevent listner of stop button
/// attach stopwatch.reset() to addevent listner of reset button
