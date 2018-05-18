let dateTime = new Date();
const interval = 1000;

function updateTime() {
  dateTime = new Date(dateTime.getTime() + interval);
  $('#clock').html(dateTime.toString());
}

$(document).ready(function() {
  updateTime();
  setInterval(updateTime, interval);
});
