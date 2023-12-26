let timerDisplay = document.querySelector('.timerDisplay');
let stopbtn = document.getElementById('stopbutton');
let startbtn = document.getElementById('startbutton');
let resetbtn = document.getElementById('resetbutton');

let hrs =0;
let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
            if (mins == 60) {
                mins = 0;
                hrs++
            }
        }
    }
    
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : mins;

    timerDisplay.innerHTML = `${hrsString} :${minsString} : ${secsString} : ${msecString}`;
}