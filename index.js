// dateObj.setSeconds(secondsValue)

function myClock() {
  let date = new Date();
  let timeString = date.toLocaleTimeString();

  let clock = document.getElementById("clock");
  clock.textContent = timeString;
}

let myInterval = setInterval(function() {
  myClock();
}, 1000);

$(document).ready(function() {
  myInterval();
});
