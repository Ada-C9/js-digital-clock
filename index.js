// Your code here
$(document).ready(function () {
  window.setInterval(myCallback, 1000);
  function myCallback() {
    $('#clock').html(new Date(Date.now()).toLocaleTimeString('en-US'));
  }
});
