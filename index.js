$(document).ready(() => {
  function currentTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    $('#clock').text(time);
  }
 window.setInterval(currentTime, 1000);

})
