const day = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

$(document).ready(function() {
  setInterval( function() {
  var newDate = new Date();
    $('#day').html(day[newDate.getDay()]);
    $('#date').html(month[newDate.getMonth()]+ ' '  + newDate.getDate() + ' ' + newDate.getFullYear());

    var seconds = new Date().getSeconds();
    $("#sec").html(addZero(seconds));

    var minutes = new Date().getMinutes();
    $("#min").html(addZero(minutes));

    var hours = new Date().getHours();
    $("#hours").html(hours);
  });
});
