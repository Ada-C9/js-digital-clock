// Your code here

let getTime = function getTime() {
  let date = new Date;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let seconds =date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

const target = document.getElementById('clock');
target.innerHTML = `The time is...<h1> ${hours}:${minutes}:${seconds} </h1>`;
};

setInterval(getTime, 1000);
