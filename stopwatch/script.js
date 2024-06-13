let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let recordBtn = document.getElementById("lap");

let hour = 0;
let minute = 0;
let second = 0;
let ms = 0;
let timer = false;
let interval;

startBtn.addEventListener("click", () => {
    if (!timer) {
        timer = true;
        stopwatch();
    }
});

stopBtn.addEventListener("click", () => {
    timer = false;
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    timer = false;
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    ms = 0;

    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("ms").innerText = "00";

    let list = document.getElementById("display");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
});

function stopwatch() {
    interval = setInterval(() => {
        if (timer) {
            ms++;
            if (ms == 100) {
                second++;
                ms = 0;
            }
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }

            let hrString = hour < 10 ? "0" + hour : hour;
            let minString = minute < 10 ? "0" + minute : minute;
            let secString = second < 10 ? "0" + second : second;
            let msString = ms < 10 ? "0" + ms : ms;

            document.getElementById("hr").innerText = hrString;
            document.getElementById("min").innerText = minString;
            document.getElementById("sec").innerText = secString;
            document.getElementById("ms").innerText = msString;
        }
    }, 10);
}

let display = document.getElementById("display");

recordBtn.addEventListener("click", () => {
    let hr = document.getElementById("hr").innerText;
    let min = document.getElementById("min").innerText;
    let sec = document.getElementById("sec").innerText;
    let ms = document.getElementById("ms").innerText;

    let lap = hr + ":" + min + ":" + sec + ":" + ms;
    let li = document.createElement("li");
    li.innerText = lap;
    display.appendChild(li);
});



