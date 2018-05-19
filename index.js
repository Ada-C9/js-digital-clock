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
  let clock = new Date();
  let month = clock.getMonth();
  let day = clock.getDate();
  let year = clock.getFullYear();

  $('#date').append(`${MONTH[month]} ${day} ${year}`);
}

const day = () => {
  let clock = new Date();
  let weekDay = clock.getDay();
  $('#day').append(`${DAY[weekDay]}`);
}

$(document).ready(() => {
  digitalClock();
  date();
  day();
});
