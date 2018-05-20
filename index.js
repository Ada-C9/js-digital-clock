// Your code here


$(document).ready(() => {
  const displayTime = function displayTime() {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if ( seconds < 10 ) {
      seconds = '0' + seconds
    }


    let clockDiv = document.getElementById('clock');

    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;


  }

  setInterval(displayTime, 1000);
})
