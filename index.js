// Your code here

const DigitalClock = function DigitalClock () {
  const start = new Date();

  let hours = start.getHours();
  let minutes = start.getMinutes();
  let seconds = start.getSeconds();

  const addZeros = function addZeros(num) {
    if (num < 10) {
      num = `0${num}`;
    }
    return num
  }

  minutes = addZeros(minutes)
  seconds = addZeros(seconds)

  const target = document.getElementById('clock')

  target.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(DigitalClock, 1000);
