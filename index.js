// Your code here
const MONTH = ["January", "February",
 "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];



const digitalClock = () => {
  let clock = new Date();
  let time = clock.toLocaleTimeString();
  $('#clock').html(time);
}


setInterval(digitalClock, 1000);

const date = () => {
  let fullDate = new Date();
  let month = fullDate.getMonth();
  let day = fullDate.getDate();
  let year = fullDate.getFullYear();

  $('#date').append(`${MONTH[month]} ${day}, ${year}`);
}

const day = () => {
  let day = new Date();
  let weekDay = day.getDay();
  $('#day').append(`${DAY[weekDay]}`);
}

$(document).ready(() => {
  digitalClock();
  date();
  day();
});
