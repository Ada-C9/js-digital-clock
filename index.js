
function myLocalClock() {
  let date = new Date();
  let timeString = date.toLocaleTimeString();
  $('#clock').html(timeString);
  let dateString = date.toDateString();
  $('#date').html(dateString);
}

function myIntlClocks() {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  
  let telAvivOffset = 3;
  let telAvivDateTime = utc + (3600000 * telAvivOffset);
  let telAvivFinal = new Date(telAvivDateTime);
  $('#telaviv').html(telAvivFinal);
}

$(document).ready(() => {
  setInterval(myLocalClock, 1000);
  setInterval(myIntlClocks, 1000);
});
