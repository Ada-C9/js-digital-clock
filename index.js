let dateTime = new Date();

// set the interval to increment by 1 second
const interval = 1000;

function updateTime() {
  dateTime = new Date(dateTime.getTime() + interval);
  
  // slice the GMT-0700 off the date object
  $('#clock').html(dateTime.toString().split(' ').slice(0, 5).join(' '));
}

$(document).ready(() => {
  updateTime();
  setInterval(updateTime, interval);
});
