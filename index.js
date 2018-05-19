//Your code here
function showTime() {
  let today  = new Date();
  let h = today.getHours();  // 0-23
  let m = today.getMinutes(); // 0-59
  let s = today.getSeconds(); // 0-59
  let session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  let time = h + ':' + m + ':' + s + ' ' + session;
  document.getElementById('clock').innerHTML = time;

  let  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay + ', ' + curDay + ' ' + curMonth + ' ' + curYear;
  document.getElementById('date').innerHTML = date;

}

setInterval(showTime, 1000);
showTime();
