window.onload = function () {
  // set the variables for buttons
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");

  let stopStatus = 0;

  let time = document.querySelector(".time");

  start.addEventListener("click", function () {
    if (stopStatus !== 0) {
      clearInterval(stopStatus);
    }
    stopStatus = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes === 0;
          hours++;
        }
      }
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      time.innerHTML = `${h} : ${m} : ${s}`;
    }, 1000);
  });

  // function to stop the stopwatch
  stop.addEventListener("click", () => {
    clearInterval(stopStatus);
  });

  // function to reset the stopwatch
  reset.addEventListener("click", () => {
    clearInterval(stopStatus);
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.innerHTML = "00 : 00 : 00";
  });
};
