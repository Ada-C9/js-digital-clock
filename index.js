//Your code here
function showTime() {
  const today  = new Date();
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

  const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const curWeekDay = days[today.getDay()];
  const curDay = today.getDate();
  const curMonth = months[today.getMonth()];
  const curYear = today.getFullYear();
  const date = curWeekDay + ', ' + curDay + ' ' + curMonth + ' ' + curYear;
  document.getElementById('date').innerHTML = date;

}

setInterval(showTime, 1000);
showTime();
