
function displayTime() {
  let currentTime = new Date();

  let hr = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  if (min < 10){
    min = "0" + min
  }
  if (sec < 10){
    sec = "0" + sec;
  }

  let time_str = hr + ":" + min + ":" + sec;

  if(hr > 11){
    time_str += " PM";
  } else {
    time_str += " AM";
  }

document.getElementById('clock').innerText = time_str;
}

$(document).ready(function() {
  setInterval(displayTime, 1000);
});
