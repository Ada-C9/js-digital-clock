
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const digitalClock = () => {
  let date = new Date();

  let display = date.toLocaleTimeString();

  $('#clock').html(display);
};

setInterval(digitalClock, 1000);

const displayDate = () => {
  let date = new Date();

  let weekDay = date.getDay();
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  $('#date').append(`${DAY[weekDay]}, ${MONTH[month]} ${day} ${year}`);
};

$(document).ready(() => {
  digitalClock();
  displayDate();
});
