const day = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January','February','March','April','May','June','July','August','September','October','November','December']

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

$(document).ready(function() {
  setInterval( function() {
  let newDate = new Date();
    $('#day').html(day[newDate.getDay()]);
    $('#date').html(month[newDate.getMonth()]+ ' '  + newDate.getDate() + ' ' + newDate.getFullYear());

    let seconds = new Date().getSeconds();
    $('#sec').html(addZero(seconds));

    let minutes = new Date().getMinutes();
    $('#min').html(addZero(minutes));

    let hours = new Date().getHours();
    $('#hours').html(hours);
  });
});
