function getTime() {
  let date = new Date();
  let localTime = date.toLocaleTimeString();

$('#clock').html(localTime);
}

$(document).ready(() => {
  setInterval(getTime, 1000);


});
