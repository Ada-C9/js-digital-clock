
$(document).ready(function() {
  let date = new Date();
  let day = date.toDateString();
  let time = date.toLocaleTimeString();

  function currentTime() {
    $('#clock').text(time);
  }

 window.setInterval(currentTime, 1000);

});
