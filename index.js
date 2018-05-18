// Your code here


$(document).ready(function() {
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

  let clock = document.getElementById('clock')
  clock.innerText = time_str;
}



  setInterval(displayTime, 1000);
});
