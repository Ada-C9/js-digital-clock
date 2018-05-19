$(document).ready(function() {
  function currentTime() {
    let date = new Date();
    let day = date.toDateString();
    let time = date.toLocaleTimeString();
    $('#clock').html(`<p>${day}</p><p>${time}</p>`);
  }
  window.setInterval(currentTime, 1000);
});
