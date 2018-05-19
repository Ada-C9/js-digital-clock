// Your code here

$(document).ready(() => {

  const currentTime = setInterval(function() { timer()}, 1000);

  function timer() {
    let d = new Date();
    let t = d.toLocaleTimeString('en-US', {hour12: false});
    $('#clock').html(t);
  }
});
