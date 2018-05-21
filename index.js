// Your code here

$(document).ready(function() {

  setInterval( myTimer, 1000);
});

function myTimer() {
  const current = new Date();
  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  // const readout = `${hours}:${minutes}:${seconds}`



  $('#clock').html(`${hours}:${minutes}:${seconds}`)
}
