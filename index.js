const addLeadingZero = function addLeadingZero(num) {
  return ('0'+num).slice(-2);
}

const updateDate = function updateDate(){
  let date = new Date();
  let hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
  }
  let minutes = addLeadingZero(date.getMinutes());
  let seconds = addLeadingZero(date.getSeconds());
  let today = date.toDateString();
  let dateString = $('<p>' + today + '</p>' + '<p>' + hour + ":" + minutes + ":" + seconds + '</p>')
  $('#clock').html(dateString);
}

$(document).ready(function() {

  setInterval(function(){ updateDate() }, 1000);

});
